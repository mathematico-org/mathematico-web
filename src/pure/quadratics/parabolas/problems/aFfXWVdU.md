---
id: aFfXWVdU
vimeo: 111
answer: 2
---

Find the coefficient of $x$ in the parabola below:

![](/img/learn/quad-28.svg)

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

There are two roots. One of them is $0$, and it is most convenient to let the
other equal $2b$ for some $b>0$.

Then the equation of the parabola must be of the form

$$
y = ax(2b - x)
$$

for some $a > 0$.

:::

::: details Hint

Focus on this triangle first. Get $h$ in terms of $a$ and $b$, then use
Pythagoras.

![](/img/learn/quad-29.svg)

:::

::: details Hint

Now use this triangle to get a second equation in $a$, $b$ and $d$.

![](/img/learn/quad-30.svg)

:::

::: details Solution

There are two roots. One of them is $0$, and it is most convenient to let the
other equal $2b$ for some $b>0$.

Then the equation of the parabola must be of the form

$$
y = ax(2b - x)
$$

for some $a > 0$. The coefficient of $x^2$ will be $-a$ - this is what we're
looking for.

Let's focus on this triangle first:

![](/img/learn/quad-29.svg)

The height $h$ of the triangle is given by $y$ when $x = b$:

$$
\begin{aligned}
y
& = ax(2b - x) \\
& = ab(2b - b) \\
& = ab^2
\end{aligned}
$$

Then, by Pythagoras,

$$
\begin{aligned}
d^2
& = h^2 + b^2 \\
& = (ab^2)^2 + b^2 \\
& = a^2b^4 + b^2 \\
& = b^2(a^2b^2 + 1)
\end{aligned}
$$

Next, let's look at this triangle

![](/img/learn/quad-30.svg)

Again by Pythagoras, we have

$$
\begin{aligned}
(2b)^2 & = d^2 + d^2 \\
4b^2 & = 2d^2 \\
d^2 & = 2b^2
\end{aligned}
$$

We can equate these two expressions for $d^2$ to find that

$$
\begin{aligned}
b^2(a^2b^2 + 1) & = 2b^2 \\
a^2b^2 + 1 & = 2 \\
(ab)^2 & = 1 \\
ab & \in \{ -1, 1 \}
\end{aligned}
$$

However, $a > 0$ and $b > 0$, so $ab = 1$.

Going back now to the equation of the parabola, we have

$$
\begin{aligned}
y & = ax(2b - x) \\
& = 2abx - ax^2 \\
& = 2x - ax^2
\end{aligned}
$$

So the coefficient of $x$ is $2$.

:::
