---
title: Practical coding for maths teachers
---

Code makes apps work, it turns my heating on at home when I walk in the door, it
checks our spleling. But what can writing code do for you, a maths teacher?

## SageMath

SageMath is a programming language designed for mathematics, and writing it
feels rather like writing mathematics.

Here is some SageMath:

```python
f(x) = x^2 + 2*x - 1
g(x) = sin(x)

show(f(3) + g(pi/3))
```

I'd like to show you a few things it can do. Here's how you can play along:

- Copy that code

- [Click this link](https://sagecell.sagemath.org/).

- Paste the code in and click _evaluate_ (or hold _shift_ and press _enter_ on
  your keyboard).

You might as well keep that tab open, you'll be using it plenty (I have it
bookmarked and I pop it open a few times a week for various reasons.)

## Expanding and factorising

Suppose, for whatever reason, I need to factor

$$
x^3 - 4x^2\left( \sqrt{3} + 3 \right) + 12x \left( 4\sqrt{3} + 1 \right) - 144
$$

Ugh, a cubic. And the constant is $144.$ I could, I suppose, whip out my Casio
and start trying

$$
x = \pm 1, \, \pm 2, \, \pm 3, \ldots
$$

or I could crack open SageMath and do

```python
f(x) = x^3 - 4*x^2*(sqrt(3) + 3) + 12*x*(4*sqrt(3) + 1) - 144

show(f(x).factor())
```

Sweet! The output is

$$
\left(x^{2} - 4 \, \sqrt{3} x + 12\right) \left(x - 12\right)
$$

Now I can get on with my life.

Whilst we're at it, we can expand things, too:

```python
f(x) = (x-1)*(x-2)*(x-3)*(x-4)*(x-5)

show(f(x).expand())
```

## Integration and differentiation

<blockquote>

**Student:** Sir... I got

$$
\frac{\pi^2(5+\sqrt{2})}{64}
$$

but the book says

$$
\frac{\pi^2(5+\sqrt{2})}{16}
$$

**Me:** Ok what was the problem?

**Student:**

$$
\int_{\frac{\pi}{8}}^{\frac{\pi}{4}} \frac{2 \, x \cos\left(x\right) \sin\left(x\right) + x^{2}}{\cos\left(x\right)^{2}} \, dx
$$

**Me:** [Looks at clock] We have three and a half minutes left. Ask me again on
Monday.

</blockquote>

In SageMath you can do

```python
f(x) = ( 2*x*cos(x)*sin(x) + x^2 ) / cos(x)^2
F(x) = f(x).integrate(x)

a = pi / 8
b = pi / 4

show(F(b) - F(a))
```

I shall let the other teachers know the book has a typo, and you can go enjoy
your weekend.

How did I invent that integral in the first place? I did

```python
F(x) = x^2 * tan(x)
f(x) = F(x).differentiate(x)

show(f(x))
```

Want to know the third derivative of that function? Pass an extra argument to
`.differentiate()` like this:

```python
F(x) = x^2 * tan(x)

show(F(x).differentiate(x, 3))
```

Imagine how helpful this could be when you're figuring out where your student
went wrong when finding a Taylor expansion. Speaking of which, here is the
expansion of $\arctan(x)$ about $x = 0$ up to the term in $x^9$

```python
g(x) = atan(x).taylor(x, 0, 9)

show(g(x))
```

Although SageMath is clever enough to know `atan(1) == pi / 4`, you can still
have fun working out some rational approximations for $\pi$:

```python
for n in range(100):
    g(x) = atan(x).taylor(x, 0, 2*n + 1)
    print(4*g(1))
```

## Equations

How do we get SageMath to solve equations? One caveat is that `=` means _is
defined as_ and so we cannot use it to solve equations. We make equations in
SageMath using `==`, so here's how we solve equations:

```python
equation = x^2 - 3*x + 2 == 2*x^2 - 5*x

show(equation.solve(x))
```

If you call `.solve()` on a function, as opposed to an equation, it will simply
look for the roots. Let's find the roots of the ugly cubic we started with:

```python
f(x) = x^3 - 4*x^2*(sqrt(3) + 3) + 12*x*(4*sqrt(3) + 1) - 144

show(f(x).solve(x))
```

If you run that code, the results are... interesting. They're not wrong, but
they're not as you'd hope! The reason is, SageMath doesn't know how you, as a
human, want to see the solutions. For polynomials, it is a great idea to try and
`factor()` them first:

```python
f(x) = x^3 - 4*x^2*(sqrt(3) + 3) + 12*x*(4*sqrt(3) + 1) - 144

show(f(x).factor().solve(x))
```

Phew! Much better.

If you play around, you will find that

```python
equation = x == sin(x)

equation.solve(x)
```

gives you the very profound solution $x = \sin(x).$ The reason for this is that
SageMath looks for symbolic solutions, and there isn't a way of manipulating
this equation to get a solution. We can use `find_root()` to solve the equation
numerically:

```python
equation = x == sin(x)

equation.find_root(-1, 1)
```

You will notice that we also passed the endpoints `-1` and `1` to tell SageMath
where to start and stop looking for the root we want.

## Decimals

SageMath will generally try and give you exact values, if possible. But what if
we need a decimal expansion? We have `.n()` for that. You use it like this:

```python
f(x) = ln(x)

show(f(2).n(digits=100))
```

This gives us $\ln(2)$ to $100$ significant figures.

Some old friends are available out of the box:

```python
show(e.n(digits=100))
show(pi.n(digits=100))
```

whereas some of them will need to be defined

```python
golden = (sqrt(5) + 1) / 2

show(golden.n(digits=100))
```

Remember the rational approximations for $\pi$ we found earlier? They are
terrible:

```python
for n in range(100):
    g(x) = atan(x).taylor(x, 0, 2*n + 1)
    print(4*g(1).n(digits=10))
```

This in itself is quite interesting. It's a nice demonstration of convergence
which I feel provides some kind of reification for students that gets lost in
the busywork of computing these by hand. This is a bit more fancy:

```python
pi_ten = pi.n(digits=10)
for n in range(100):
    g(x) = atan(x).taylor(x, 0, 2*n + 1)
    approx = 4*g(1).n(digits=10)
    error = abs(pi_ten - approx)
    print(error)
```

Students might start to wonder _what is the error as a function of $n$?_ and hey
presto they've inquired about the
[Taylor remainder](https://en.wikipedia.org/wiki/Taylor%27s_theorem#Explicit_formulas_for_the_remainder).

## Plotting

SageMath can plot functions! Here's an example

```python
plot(sin(x), xmin=-2*pi, xmax=2*pi, ymin=-2, ymax=2)
```

Now you can copy that image and paste it wherever you like.

If you'd like to add more stuff to your plot, you can makes a graphics object
and add things to it:

```python
G = Graphics()
G = G + plot(sin(x), xmin=-2*pi, xmax=2*pi, ymin=-2, ymax=2, color='green')
G = G + plot(cos(x), xmin=-2*pi, xmax=2*pi, ymin=-2, ymax=2, color='orange')
show(G)
```

There is a boatload more stuff we can do with plotting in SageMath so that is
probably a separate post for the future.

## Outro

We've taken a quick tour through `.factor()`, `.expand()`, `.integrate()`,
`.differentiate()`, `taylor()`, `.solve()`, `.find_root()`, `.n()`, and
`plot()`. There's a lot more SageMath can do, and I'll be writing more about it
in the future, but for now I hope SageMath can help you save time and energy,
invent nice problems, explore pretty patterns, escape the tedium, inspire
budding computer scientists in your classroom, and have fun!

It is possible to install SageMath on your computer and run it locally, so you
can save your code and reuse it, or use it when you have no internet connection.

If you know some Python, you have probably noticed that much of the syntax is
the same. In fact, SageMath is a superset of Python, so valid Python is also
valid SageMath.

Now go forth and compute an obscenely large number of derivatives of your
favourite functions!
