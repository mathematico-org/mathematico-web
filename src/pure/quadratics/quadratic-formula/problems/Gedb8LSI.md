---
id: Gedb8LSI
vimeo: 433733263
answer: 2.41
---

The circles below have the property that the area of the smaller circle is equal
to the circumference of the larger circle.

![Circle within circle](/img/learn/quad-19.svg)

Find the radius of the smaller circle, giving your solution to $3$ significant
figures.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Let the smaller circle have radius $r$ and the larger circle have radius $R$.

Then

$$
2R = 2r + 1
$$

:::

::: details Hint

The relationship between the two circles can be expressed as

$$
\pi r^{2} = 2 \pi R
$$

(It will help to cancel $\pi$ before continuing.)

:::

::: details Solution

Let the smaller circle have radius $r$ and the larger circle have radius $R$.

Then

$$
2R = 2r + 1
$$

The relationship between the two circles can be expressed as

$$
\begin{aligned}
\pi r^{2} & = 2 \pi R \\
r^2 & = 2 R \\
r^2 & = 2r + 1 \\
r^2 - 2r - 1 & = 0
\end{aligned}
$$

so by the quadratic formula

$$
\begin{aligned}
r & = \frac{ 2 \pm \sqrt{4 - 4(1)(-1)} }{ 2 } \\
& = 1 \pm \sqrt{2}
\end{aligned}
$$

Clearly $r > 0$, so $r = 1 + \sqrt{2} = 2.41 \, (3 \text{ s.f.})$ is the only
solution.

:::
