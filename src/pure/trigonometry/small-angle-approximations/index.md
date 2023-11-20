---
title: Small angle approximations
id: uCLstLrh
vimeo: 111
problems:
  - BpMna4jp
  - CLzsRzoT
  - gdmWJEM5
  - mwhdQLEl
  # - gmBWtor9
  - l86Sgt9B
  - d4gN01ek
  - jL75qE9n
  # - OOFZstpL
---

Take a look at a graph of $y = \cos(x)$ and compare it with $y = 1 - \frac{x^2}{2}$.

![cos(x) and 1-x^2/2](/img/learn/trig-37.svg)

When $x$ is close to $0,$ the curves are almost the same. This means that when $x$ is small, we can work with $1 - \frac{1}{x^2}$ instead of $\cos(x),$ which can sometimes make problems much simpler.

The situation is similar with $y = \sin(x)$ and $y = x$

![sin(x) and x](/img/learn/trig-38.svg)

and again with $y = \tan(x)$ and $y = x$

![tan(x) and x](/img/learn/trig-39.svg)


So, when $\theta$ is small (i.e. close to $0$):
$$
\begin{aligned}
\cos \theta & \approx 1 - \frac{\theta^2}{2} \\
\sin \theta & \approx \theta \\
\tan \theta & \approx \theta
\end{aligned}
$$

These are called the small angle approximations, and they tend to work best when $\theta$ is smaller than about $0.2$ radians, although this really depends on the level of accuracy required for your particular application.

**It is important to note that the small angle approximations are only valid when $\theta$ is measured in radians.**

---

Given that $x$ is small and measured in radians, use the small angle approximation to find an expression which approximates
$$
f(x) = \cosec x \left( \cos 2x + \tan \frac{x}{2} \right)
$$
simplifying your answer.
