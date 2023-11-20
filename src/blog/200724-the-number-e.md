---
title: The number e
---

## Money lending

Let's suppose I lend you some money, $£M_0,$ and because I'm so generous I say
you can pay me back double at the end of the year. So, after one year, you owe
me

$$
M_0 \times (1 + 1)
$$

Ok, that's a weird way of writing it, but it's useful because I'm going to make
you an offer (because I'm so generous, you see): after each month, I'll increase
your debt by a mere $\frac{1}{12}$ and that's how much you owe me. Smaller
increments, more often - fair is fair. You're welcome.

## Read the small print

The wording of our agreement is very important. The amount you owe is

$$
\begin{aligned}
M_0 \left( 1 + \frac{1}{12} \right) & \, \, \text{ after } 1 \text{ month } \\
M_0 \left( 1 + \frac{1}{12} \right)^2 & \, \, \text{ after } 2 \text{ months } \\
M_0 \left( 1 + \frac{1}{12} \right)^3 & \, \, \text{ after } 3 \text{ months } \\
\vdots
\end{aligned}
$$

What if it still takes you a year to raise the money to pay me back? Then you
owe me

$$
M_0 \left( 1 + \frac{1}{12} \right)^{12}
$$

Without a calculator, you might think _sure, probably fair_. But this is

$$
M_0 \times 2.613035290\ldots
$$

Are you still happy with this arrangement?

## Towards $e$

What about if I offer to increase your debt by a tiny $\frac{1}{365}$ each day?
Surely you're happier with that? Then again, at the end of the year you owe

$$
M_0 \left( 1 + \frac{1}{365} \right)^{365} = M_0 \times 2.714567482\ldots
$$

That's still better for the lender, but they might be a little disappointed that
the coefficient leaps from $2$ to $2.6$ (ish) the first time but only $2.6$ to
$2.7$ the second time.

But still, the tendency is to push this further: what about every hour?

$$
M_0 \left( 1 + \frac{1}{365 \times 24} \right)^{365 \times 24} = M_0 \times 2.718126692\ldots
$$

The lender is a little happier! Every minute?

$$
M_0 \left( 1 + \frac{1}{365 \times 24 \times 60} \right)^{365 \times 24 \times 60} = M_0 \times 2.718279243\ldots
$$

Every _second_?

$$
M_0 \left( 1 + \frac{1}{365 \times 24 \times 60^2} \right)^{365 \times 24 \times 60^2} = M_0 \times 2.718281785\ldots
$$

We're making the coefficient grow less and less each time. It's approaching a
limit, and that limit is called the number $e$

<img src="/img/blog/200724-the-number-e-1.png" style="max-width: 100%; max-height: 35vh; margin: auto; display: block; margin-top: 30px; margin-bottom: 30px;" >

## The definition of $e$

We define $e$ as

$$
\lim_{n \rightarrow \infty} \left( 1 + \frac{1}{n} \right)^n
$$

If you choose a large number for $n,$ say ten million, your calculator gives you

$$
e \approx 2.718281693
$$

whereas the true value of $e$ would be

$$
e = 2.718281828\ldots
$$

The digits would keep going and would have no pattern to them. In fact, $e$ is
an irrational number like $\pi$ or $\sqrt{2}.$

The most money the lender could possibly make by increasing the frequency of the
compounding is

$$
M_0 \times e
$$

## Differentiating $e^x$

We're going to use differentiation from first principles to see why

$$
\frac{d}{dx} e^x = e^x
$$

Let $f(x) = e^x.$ Then

$$
\begin{aligned}
f'(x)
& = \lim_{h \rightarrow 0} \frac{f(x+h) - f(x)}{h} \\
& = \lim_{h \rightarrow 0} \frac{e^{x+h} - e^x}{h} \\
& = \lim_{h \rightarrow 0} \frac{e^x \left( e^h - 1 \right)}{h} \\
& = e^x \lim_{h \rightarrow 0} \frac{e^h - 1}{h}
\end{aligned}
$$

Now let $k = e^h - 1,$ so $h = \ln(1 + k)$ and

$$
k \rightarrow 0 \Leftrightarrow h \rightarrow 0
$$

So

$$
f'(x) = e^x \lim_{k \rightarrow 0} \frac{k}{\ln(1 + k)}
$$

Finally, let $n = \frac{1}{k}$ so

$$
k \rightarrow 0 \Leftrightarrow n \rightarrow \infty
$$

Then we get

$$
\begin{aligned}
f'(x)
& = e^x \lim_{n \rightarrow \infty} \frac{ 1 }{ n \ln \left(1 + \frac{1}{n} \right) } \\
& = e^x \lim_{n \rightarrow \infty} \frac{ 1 }{ \ln\left[ \left( 1 + \frac{1}{n} \right)^n \right] } \\
& = e^x \frac{ 1 }{ \ln(e) } \\
& = e^x
\end{aligned}
$$

That was a lot of work! But we managed to use nothing but the definition of $e$
and some laws of logarithms to prove what we wanted, which is a nice itch to
scratch.

## The uniqueness of $e$

Is $e^x$ the only type of function that differentiates to itself? Suppose $g(x)$
is another function with the property that $g'(x) = g(x)$ and consider, by the
quotient rule,

$$
\begin{aligned}
\frac{d}{dx}\frac{g(x)}{e^x}
& = \frac{e^xg'(x) - e^xg(x)}{e^{2x}} \\
& = \frac{e^xg(x) - e^xg(x)}{e^{2x}} \\
& = 0
\end{aligned}
$$

which implies

$$
\frac{g(x)}{e^x} = k
$$

for some $k \in \mathbb{R}.$ So $g(x)$ must be a multiple of $e^x.$ This means
$e$ really is special! (Note: if we include the property that $g(0) = 1$ then
$k = 1$ so $g(x) = e^x$.)

## Conclusions

The financial origins of the number $e$ are interesting, and can be adapted into
a fun task where students are led to the value of $e$ by greedily trying to
swindle more and more money from their customers.

The fact that the fundamental property of $e^x$ follows from this definition and
first principles is pretty astonishing, but it is to be hoped for because these
properties should depend only on the definitions. The working is probably a bit
too technical to be enjoyable for most A Level students, but it could be
demonstrated at break time if anyone ever asks.

Finally, $e^x$ is somehow unique amongst all functions for having this property,
which should convince anyone of its importance. $\pi$ and $\phi$ steal a lot of
the limelight, but $e$ is by far my favourite number.
