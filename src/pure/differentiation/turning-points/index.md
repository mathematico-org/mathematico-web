---
title: Turning points
id: pLuTAtcd # cdC2385M
vimeo: 111
problems:
  - yCJb41aw
  - JNgX9NpC
  - Fz6C1CGE
  - pLOtFVt9
  - BCriZiX2
  - PytdqOS0
  - dItJCsuw
  - gX2jpa9l
  # - UI0WkNk0
  # - myBVa40F
---

At a *local maximum* point or a *local minimum* point, the gradient satisfies
$$
\frac{dy}{dx} = 0
$$
You can see this geometrically because the tangent is horizontal:

![](/img/learn/max-min-1.png)

Thus, in order to find these maximum and minimum points, we can solve the equation
$$
\frac{dy}{dx} = 0
$$
Collectively, maxima and minima are known as *turning points*.

## Classifying turning points

Once we have found a turning point, how should we decide if it is a maximum or a minimum turning point?

To do this, we consider whether the gradient of the curve is increasing:

<geogebra id="rqnxvhz2"></geogebra>

To do this, we must consider the rate of change of the gradient function, $\frac{dy}{dx}.$ When we differentiate $\frac{dy}{dx}$ we find the *second derivative* of $y$. We have the following special notation:
$$
\begin{aligned}
y = f(x) & \,\, \text{ (equation of curve)} \\
\frac{dy}{dx} = f'(x) & \,\, \text{ (first derivative)} \\
\frac{d^2y}{dx^2} = f''(x) & \,\, \text{ (second derivative)}
\end{aligned}
$$
The reason we write $\frac{d^2y}{dx^2}$ is because we are finding
$$
\begin{aligned}
\frac{d}{dx} \text{ of } \frac{dy}{dx} & = \frac{d}{dx} \left( \frac{dy}{dx} \right) \\
& = \frac{d^2y}{dx^2}
\end{aligned}
$$

## The second derivative test

If $\frac{dy}{dx} = 0$ and

 - $\frac{d^2y}{dx^2} > 0$ then the gradient is increasing, so we have a minimum point: ![](/img/learn/max-min-3.png)

 - $\frac{d^2y}{dx^2} < 0$ then the gradient is decreasing, so we have a maximum point: ![](/img/learn/max-min-4.png)

Let's try it out!

---

Find the turning points of the curve
$$
y = \frac{x^3}{12} - \frac{x^2}{4}
$$
and determine the nature of the turning points.
