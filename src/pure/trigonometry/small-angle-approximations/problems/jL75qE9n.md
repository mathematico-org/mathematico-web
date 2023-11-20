---
id: jL75qE9n
vimeo: 111
---

When $\theta$ is small, $\theta^4$ and higher powers are extremely small, so
$$
1 + \frac{\theta^2}{2} + \frac{\theta^4}{4} + \frac{\theta^6}{8} \ldots \, \approx \, 1 + \frac{\theta^2}{2}
$$
Interestingly, the diagram below suggests that
$$
\cos \theta \approx \frac{1}{1 + \frac{\theta^2}{2}}
$$

![Three curves](/img/learn/trig-42.svg)

 1. Find the sum of the infinite geometric series
    $$
    1 + \frac{\theta^2}{2} + \frac{\theta^4}{4} + \frac{\theta^6}{8} \ldots
    $$
    and hence show that, for small values of $\theta$, this sum is approximately equal to $\sec \theta.$

 1. Given that
    $$
    1 - \frac{x^2}{2} \leq \cos x \leq \frac{1}{1 + \frac{x^2}{2}}
    $$
    for all small values of $x,$ show that the error between $\cos x$ and the small angle approximation $1 - \frac{x^2}{2}$ is smaller than
    $$
    \frac{x^4}{2(x^2 + 2)}
    $$

 1. Hence, show that the error given by the small angle approximation for $x = 0.1$ is smaller than $2.5 \times 10^{-5}$

---

For (a), use the formula
$$
S_{\infty} = \frac{a}{1-r}
$$
for geometric series. You should see the small angle approximation for $\cos\theta$ in your answer.

---

For (b), look at the graph to see that the error between
$$
\cos \theta \quad  \text{and} \quad 1 - \frac{\theta^2}{2}
$$
is smaller than the error between
$$
\frac{1}{1 + \frac{\theta^2}{2}} \quad \text{and} \quad 1 - \frac{\theta^2}{2}
$$
