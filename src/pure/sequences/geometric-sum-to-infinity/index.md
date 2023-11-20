---
title: Sum to infinity
id: gYYCKqRL
vimeo: 111
problems:
  - zIfJopdp
  - vHEh6T84
  - dheLQ8MC
  - nbbZkoAk
  - nJdttsaI
  - GOu6DKfc
  - P2ehA45c
---

Consider a geometric sequence with first term $a$ and common ratio $r$.

If $|r| < 1$, then the term $r^n$ gets very small as $n$ gets very large. This means that
$$
\begin{aligned}
\lim_{n \to \infty} S_n & = \lim_{n \to \infty} a \, \frac{1-r^n}{1-r} \\
& = a \, \frac{1 - 0}{1-r}
\end{aligned}
$$
Recall that $n$ is the *number of terms* in the sum, and so if we keep adding up the terms forever, we get
$$
S_{\infty} = \frac{a}{1-r}
$$
This is the formula for the sum to infinity of a geometric sequence.

**Remember**: this formula *only* works when $-1 < r < 1$. Otherwise, the term $r^n$ only gets bigger as $n$ gets bigger, and the numerator in the $S_n$ formula doesn't become $1 - 0$.

---

Use the formula for $S_{\infty}$ to find the sum of the sequences:

 1. $$
    1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \ldots
    $$

 1. $$
    3 - 1 + \frac{1}{3} - \frac{1}{9} + \ldots
    $$
