---
title: Curriculum sequencing for the fundamental theorem of calculus
---

This post is in no way a criticism of how teaching is sequenced in other departments: there are arguments for many different ways of structuring calculus instruction and they all have their strengths and weaknesses. This is just an insight into what my department is currently doing and our motivation for doing so.

## Back in my day...

As a learner, integration was introduced to me as the inverse process to differentiation, and when this anti-differentiation is inconvenient, we can use Riemann sums (or trapezia) to do the approximation. I do not begrudge this in the slightest: it got the job done. Sometimes, as educators, you can't present the complete picture to students - it's too much information (just ask the chemistry department about electrons).

My own experience when disentangling my understanding of integration was a bit like when my Y9 teacher explained that a square is a rectangle. 'NO IT IS NOT' I screamed (in my head). This kind of deep restructuring of your internal model of the universe is what psychologists call *accommodation* and it is sort of unpleasant but quite satisfying at the same time. My reaction when reading my undergrad calculus texts was no less visceral:

<blockquote>

Integration is *defined as* the limit of the Riemann sums*; the fact that this limit can be achieved by anti-differentiation is a beautiful, stunning, miracle** of the universe called The Fundamental Theorem of Calculus (FTC).

</blockquote>

<span class="footnote-size">

\* Again this is not *quite* true - we should be using upper and lower sums and partitions - but there are levels to the rigour we want to impose and this is ok for now.

\*\* The secular type - I'm not questioning or affirming the existence of a mathematical deity here!

</span>

Maybe you were always of this understanding, but for those of us who view(ed) anti-differentiation as *the definition of* integration it is a hard change of perspective to make.

## Sequencing

With the new curriculum in 2018, our department decided to take the opportunity to rearrange our curriculum and try to foster this appreciation, whilst trying not to harm students' procedural understanding of integration. We chose the ordering:

 - Differentiation

 - then Numerical Methods

 - then Integration

and we were glad to see that our new textbooks did similar. I don't know how common this is, so maybe I'm preaching to the choir here, but the teachers in my department all had similar experiences to me at A Level.

The notation
$$
\int_a^b f(x) \, dx
$$
is introduced before anti-differentiation is ever discussed. It is taken to mean *the actual area under the curve* rather than the approximation, and we write things such as
$$
\int_a^b f(x) \, dx \approx \sum_{i=1}^n f(x_i) \Delta x
$$
before ever contemplating the idea that $\int f' = f.$

This is where the fun begins.

## Calculating limits

I tend now to sacrifice a whole one-hour lesson to the calculation of $\int x$ and $\int x^2$ from first principles. For me, it's worth it, because students then start to conjecture about the FTC.

I arm the students with the knowledge that
$$
\sum_{i = 1}^{n} i = \frac{n(n+1)}{2} \quad \text{ and } \sum_{i = 1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}
$$
and we work through the algebra together.

Here's what we get for $\int x$ (click the arrow to see the algebra):

<answer>

$$
\begin{aligned}
\int_a^b x \, dx
& = \lim_{n \rightarrow \infty} \sum_{i = 1}^{n} f(x_i) \Delta x \\
& = \lim_{n \rightarrow \infty} \sum_{i = 1}^{n} \left( a + \frac{b - a}{n}i \right) \frac{b - a}{n} \\
& = \lim_{n \rightarrow \infty} \sum_{i = 1}^{n} \frac{a(b-a)}{n} + \frac{(b-a)^2}{n^2}i \\
& = \lim_{n \rightarrow \infty} a(b - a) + \frac{(b-a)^2}{n^2} \frac{n(n+1)}{2} \\
& = \lim_{n \rightarrow \infty} a(b - a) + \frac{(b - a)^2}{2} \left(1 + \frac{1}{n} \right) \\
& = a(b - a) + \frac{(b - a)^2}{2} \\
& = \frac{2ab - 2a^2 + b^2 + a^2 - 2ab}{2} \\
& = \frac{b^2}{2} - \frac{a^2}{2}
\end{aligned}
$$

</answer>

A lot of work for, essentially, the area of a trapezium.

For $\int x^2$:

<answer>

$$
\begin{aligned}
\int_{a}^{b} x^2 \, dx
& = \lim_{n \rightarrow \infty} \sum_{i = 1}^{n} f(x_i) \Delta x \\
& = \lim_{n \rightarrow \infty} \sum_{i = 1}^{n} \left( a + \frac{b-a}{n}i \right)^2 \frac{b - a}{n} \\
& = \lim_{n \rightarrow \infty} \sum_{i = 1}^{n} \left( a^2 + \frac{2a(b-a)}{n}i + \frac{(b-a)^2}{n^2}i^2 \right) \frac{b-a}{n} \\
& = \lim_{n \rightarrow \infty} \sum_{i = 1}^{n} \frac{a^2(b-a)}{n} + \frac{2a(b-a)^2}{n^2}i + \frac{(b-a)^3}{n^3}i^2 \\
& = \lim_{n \rightarrow \infty} a^2(b - a) + \frac{2a(b-a)^2}{n^2} \frac{n(n+1)}{2} + \frac{(b-a)^3}{n^3} \frac{n(n+1)(2n+1)}{6} \\
& = \lim_{n \rightarrow \infty} a^2(b - a) + a(b - a)^2 \left( 1 + \frac{1}{n} \right) + (b - a)^3 \left( \frac{1}{3} + \frac{1}{2n} + \frac{1}{6n^2} \right) \\
& = a^2(b - a) + a(b - a)^2 + \frac{(b - a)^3}{3} \\
& = \frac{3a^2b - 3a^3 + 3ab^2 + 3a^3 - 6a^2b + b^3 - 3b^2a + 3ba^2 - a^3}{3} \\
& = \frac{b^3}{3} - \frac{a^3}{3}
\end{aligned}
$$

</answer>

The algebra is pretty intense, but the rush of seeing the area under a parabola simplify down to
$$
\frac{b^3}{3} - \frac{a^3}{3}
$$
from all that mess really tells part of the story of mathematics. Things just feel hopelessly complicated sometimes, and in the darkest moments of algebraic despair, out comes this gorgeous, neat little formula. And that is just the beginning.

What do you think the area under a cubic might be? A fair guess is
$$
\frac{b^4}{4} - \frac{a^4}{4}
$$
and if you felt ambitious, use
$$
\sum_{i = 1}^{n} i^3 = \frac{n^2(n+1)^2}{4}
$$
to find $\int x^3$ - chocolate for anyone that does it!

## Conjecture

We eventually come to the conjecture that
$$
\int_{a}^{b} x^n \, dx = \frac{b^{n+1}}{n+1} - \frac{a^{n+1}}{n+1}
$$
and I explain this is written conventionally as
$$
\int_{a}^{b} x^n \, dx = \left[ \frac{x^{n+1}}{n+1} \right]_{a}^{b}
$$

The relationship between
$$
x^{n} \quad \text{ and } \quad \frac{x^{n+1}}{n+1}
$$
might be spotted, or it might require a bit of nudging, but once it has been noticed, we begin a parade of area-finding by anti-differentiation:

$$
\begin{aligned}
\int_a^b \cos x \, dx & = \ldots \\
\int_a^b e^x \, dx & = \ldots \\
\int_a^b \sqrt{x} & = \ldots \\
\int_a^b \frac{1}{x} & = \ldots
\end{aligned}
$$

It is *amazing* that, until now, the student was only ever able to find the area of pointy things or perfectly circular things, but now all kinds of curvy things are approachable with 100% accuracy.

## Sidestepping a few things

If I'm working with a class who would not cope with the algebra, or I don't have the time, I would still flash the calculation on the board and say 'here is how a formula can be gotten for $\int x$' and 'here is how to get the formula for $\int x^2$ - it is a lot worse! Don't even ask about $\int x^3$. But what do you think the formula would be, based on the last two examples?' and the same discussion still ensues.

A line has to be drawn somewhere: I do not think a full proof of the FTC is valuable at this stage. It isn't very hard, but it needs the mean value theorem, more time, more rigour, and doesn't do much to progress the students' learning in a relevant direction for A Level. My purpose in choosing this sequence is to *motivate* the idea that anti-differentiation is not the definition of $\int,$ but it is an incredibly beautiful fact that anti-differentiation can help us calculate $\int.$

A problem could be that the student gets the idea that spotting a pattern is a good enough proof. It should be enough to mention that our work is not a proof, but if they want to see one, take Mathematics at university!

## A couple of examples

To further highlight the boundaries, it's interesting to note that
$$
\int_{0}^{\pi} \sin(x^2) \, dx
$$
exists: it can be proved the Reimann sums converge, and the area is a single number. In fact, $\sin(x^2)$ is *integrable*. But! You cannot write down a function that differentiates to $\sin(x^2)$ (without resorting to trickery like using the symbol $\int$ or a Taylor Series or something). In a meaningful sense, $\sin(x^2)$ cannot be undifferentiated, but it can be integrated.

Finally, a very naughty function like
$$
f(x) =
\begin{cases}
1, \text{ if } x \in \mathbb{Q} \\
0, \text{ if } x \notin \mathbb{Q}
\end{cases}
$$
cannot be integrated as it has too many discontinuities. It's not that the area is $0$ - it's deeper than that: the area is not defined. The shape of this graph is so pathological that the word 'area' has no meaning to it. It scoffs at our puny attempts to tame $\mathbb{R}^2$ with simple definitions.
