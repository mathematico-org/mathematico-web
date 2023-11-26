---
id: s0HKNmB0
vimeo: 433733152
answer: 8
---

This shape is called a golden rectangle:

![Golden rectangle](/img/learn/quad-20.svg)

It has the property that

$$
\frac{b}{a} = \frac{a+b}{b}
$$

The value of $\frac{b}{a}$ is called $\varphi$ and is known as the golden ratio,
a famous number.

Given that, in simplest form,

$$
\varphi = \frac{p + \sqrt{q}}{r}, \quad p, q, r \in \mathbb{N}
$$

Find $p + q + r$.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

Split the right side into two fractions:

$$
\begin{aligned}
\frac{b}{a} & = \frac{a+b}{b} \\[5pt]
\frac{b}{a} & = \frac{a}{b} + \frac{b}{b}  \\[5pt]
\end{aligned}
$$

Now notice that

$$
\frac{a}{b} = \frac{1}{\left(\frac{b}{a}\right)}
$$

Replace $\frac{b}{a}$ with $\varphi$ and solve.

:::

::: details Hint

You should get

$$
\varphi = 1 + \frac{1}{\varphi}
$$

Multiply both sides by $\varphi$ to get rid of the fraction and then use the
quadratic formula.

:::

::: details Solution

By definition,

$$
\begin{aligned}
\frac{b}{a} & = \frac{a+b}{b} \\
\frac{b}{a} & = \frac{a}{b} + \frac{b}{b}\\
\frac{b}{a} & = \frac{1}{\frac{b}{a}} + 1 \\
\varphi & = \frac{1}{\varphi} + 1 \\
\varphi^2 & = 1 + \varphi \\
\varphi^2 - \varphi - 1 & = 0 \\
\end{aligned}
$$

We're now ready to use the formula

$$
\begin{aligned}
\varphi & = \frac{1 \pm \sqrt{1 - 4(1)(-1)}}{2} \\
& = \frac{1 \pm \sqrt{5}}{2}
\end{aligned}
$$

However, $\varphi > 0$ because it is the ratio of two lengths. Therefore

$$
\varphi = \frac{1 + \sqrt{5}}{2}
$$

:::
