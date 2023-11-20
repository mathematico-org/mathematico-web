---
id: yTrCBwvM
vimeo: 111
---

The sequence $\ell_n$ is defined by
$$
\begin{aligned}
\ell_1 & = 2 \\
\ell_2 & = 9 \\
\ell_{n+2} & = \frac{1 + \ell_{n+1}}{\ell_{n}}
\end{aligned}
$$
Find the period of this seqence.

---

Compute the next few values of $\ell_n$, beginning with
$$
\ell_3 = \frac{1  + \ell_2}{\ell_1}
$$

---

Because the next term depends on the previous *two* terms, you can't stop once a single number gets repeated. You can only stop when a pair of consecutive terms has appeared before in the sequence.

---

You need to compute as far as $\ell_7$ to get the period.
