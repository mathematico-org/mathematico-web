---
id: h6Oyn1Zm
vimeo: 111
answer: 47.8
---

The equation

$$
2x^2 + qx + q-1 = 0
$$

has exactly two real solutions.

Find the range of possible values of $q$.

If your solution is of the form

- $\alpha < q < \beta$, give $\alpha^2 + \beta$
- $\alpha \leq q \leq \beta$, give $\alpha^3 + \beta$
- $q < \alpha \cup q > \beta$, give $\alpha + \beta^2$
- $q \leq \alpha \cup q \geq \beta$, give $\alpha + \beta^3$

to $3$ significant figures.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Consider the discriminant.

:::

::: details Hint

$$
b^2 - 4ac > 0
$$

:::

::: details Solution

Exactly two real solution means that the discriminant is positive

$$
\begin{aligned}
b^2 - 4ac & > 0 \\
q^2 - 4(2)(q-1) & > 0 \\
q^2 - 8q + 8 & > 0 \\
\end{aligned}
$$

The roots are $q = 4 \pm 2\sqrt{2}$ and we sketch $q^2 - 8q + 8$:

![rectangle](/img/learn/quadratic-inequalities-05.svg)

We see that $q^2 - 8q + 8 > 0$ when

$$
q < 4 - 2\sqrt{2} \quad \cup \quad q > 4 + 2\sqrt{2}
$$

:::
