---
id: AfLmt6hF
vimeo: 431923487
answer: 97
---

### Problem 1

Factorise the following quadratic expressions:

1.  $x^2 - 2kx + k^2$

1.  $x^2 - kx - 2k^2$

1.  $3p^2 - 5pq - 2q^2$

Part (c) can be given in the form

$$
(p - aq)(bp + q), \quad a,b \in \mathbb{N}
$$

Give the value of

$$
a^4 + b^4
$$

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

For the first problem, imagine it in this way

$$
x^2 + \underbrace{(-2k)}_{b} x + \underbrace{k^2}_{c}
$$

So you can begin by writing

$$
(x \qquad )(x \qquad )
$$

and your table should look like

$$
\begin{array}{c}
k^2 \\
\hline \begin{array}{c|c} \pm 1 & \pm k^2 \\
\pm k & \pm k \end{array}
\end{array}
$$

You are searching for the pair from the table which adds together to make $-2k.$

The other two can be treated similarly.

:::

::: details Solution

1. $$(x - k)^2$$

1. Our table looks like

   $$
   \begin{array}{c}
   -2k^2 \\
   \hline \begin{array}{c|c} \pm 2 & \mp k^2 \\
   \pm 2k & \mp k \end{array}
   \end{array}
   $$

   We need the pair which adds to make $-k$ and so we get

   $$
   (x - 2k)(x + k)
   $$

1. We can consider this as a quadratic in terms of $p$, so we get
   $$
   \begin{array}{c}
   -6q^2 \\
   \hline
    \begin{array}{c|c}
    \pm 6 & \mp q^2 \\
    \pm 3 & \mp 2q^2 \\
    \pm 2 & \mp 3q^2 \\
    \pm 6q & \mp q \\
    \pm 3q & \mp 2q \\
    \pm 2q & \mp 3q \\
    \end{array}
   \end{array}
   $$
   We need the pair which sums to $-5q$, so we get
   $$
   \frac{(3p - 6q)}{3} \frac{(3p + q)}{1} = (p - 2q)(3p + q)
   $$

:::
