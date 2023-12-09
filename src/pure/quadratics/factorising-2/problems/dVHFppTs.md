---
id: dVHFppTs
vimeo: 432527530
answer: 2
tags:
  - modelling
---

### Problem 8 <Badge text="modelling" />

The image below shows a circular piece of grass surrounded by a concrete path.
The width of the path is equal to $2\text{m}$

![Path diagram](/img/learn/quad-13.svg)

Given that the area of the path is three times larger than the area of the
grass, find the radius of the grass circle.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Let the radius of the grass part be $r$. Then the radius of the outer circle is
$r+2$. Recall the area of a circle is $\pi r^{2}.$

:::

::: details Hint

The area of the concrete is the area of the outer circle minus the area of the
grass part.

:::

::: details Hint

"$A$ is three times bigger than $B$" means $A = 3B$, not the other way round!

:::

::: details Solution

Let the radius of the grass be $r$. Then the area of the grass is $\pi r^2$.

The area of the path alone must be $\pi (r + 2)^2 - \pi r^2$.

Since the area of the path is $3$ times the area of the grass, we have

$$
\begin{aligned}
\pi(r + 2)^2 - \pi r^2 & = 3 \pi r^2 \\
(r + 2)^2 - 4r^2 & = 0 \\
r^2 + 4r + 4 - 4r^2 & = 0 \\
-3r^2 + 4r + 4 & = 0 \\
3r^2 - 4r - 4 & = 0 \\
(3r + 2)(r - 2) & = 0 \\
r & \in \left\{ -\frac{2}{3}, 2 \right\}
\end{aligned}
$$

However, $r$ is a radius and cannot be negative, so $r = 2$.

:::
