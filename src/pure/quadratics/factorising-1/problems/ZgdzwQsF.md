---
id: ZgdzwQsF
vimeo: 574007677
answer: 114
---

# Problem 7

Find the area of the below trapezium:

![Trapezium](/img/learn/quad-16.svg)

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

You can split the trapezium up like this:

![Sectioned trapezium](/img/learn/quad-16-1.svg)

:::

::: details Hint

If you apply Pythagoras' Theorem to the triangle at the top, you can find $x.$
Once you know $x,$ you can substitute to find the length of each side, and then
find the area.

:::

::: details Solution

![Sectioned trapezium](/img/learn/quad-16-1.svg)

Applying Pythgoras' Theorem to the triangle at the top, we get

$$
\begin{aligned}
(2x)^2 + [2x - (x+1)]^2 & = (2x + 1)^2 \\
4x^2 + (x - 1)^2 & = 4x^2 + 4x + 1 \\
x^2 - 2x + 1 & = 4x + 1 \\
x^2 - 6x & = 0 \\
x(x - 6) & = 0 \\
x & \in \{ 0, 6 \}
\end{aligned}
$$

Clearly, $x \neq 0$ so $x = 6$ is the only solution.

The area of the trapezium is given by the formula

$$
\begin{aligned}
\frac{a+b}{2} h
& = \frac{12 + 7}{2} \times 12 \\
& = 114
\end{aligned}
$$

:::
