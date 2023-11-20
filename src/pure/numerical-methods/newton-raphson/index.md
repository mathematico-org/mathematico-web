---
title: Newton-Raphson
id: d1RfVcU0
vimeo: 111
problems:
  - N3mYkHBp
  - mP5PhcIR
  - eRWCWs3L
  - l5gt9CPB
  - QRmdWHwJ
  # - LQqsHVGd
  # - GtC9CgjF
  # - gUAKOGhz
  # - fYduiXsS
  # - AQRK6fTA
---

The Newton-Raphson method is another way for solving an equation of the form
$$
f(x) = 0
$$
Suppose $\alpha$ is a solution to this equation, and $x_0$ is a number we believe to be close to $\alpha.$ The image below shows how the Newton-Raphson method works:

<geogebra id="suykpys6"></geogebra>

The idea is:

 - We guess an $x_0$ and find the point $(x_0,y_0)$ on the curve

 - We find the equation of the tangent to the curve at $(x_0,y_0)$

 - Then $x_1$ is given by the point where this tangent crosses the $x$ axis

Now, that process is a little long-winded. Using algebra, we can show that
$$
x_1 = x_0 - \frac{f(x_0)}{f'(x_0)}
$$
This can be done again and again to get closer and closer to $\alpha.$ Generally,
$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

---

Use the Newton-Raphson method, with a starting value of $x_0 = 1.1$ to find $2$ further approximations for one of the solutions to
$$
2 x^{2} + 3 x - 6 = 0
$$
