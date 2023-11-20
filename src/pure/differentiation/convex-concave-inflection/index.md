---
title: Convexity and concavity
id: SR6ofQzy
vimeo: 111
problems:
  - F6o2c05Q
  - PQUxm0eB
  - EqrauUiW
  - zBXZnG8S
  - dlwHu9Sb
  - qibOXDtZ
  # - Ycb0HAhQ
  # - e2qYOAMg
  # - BP5LuHEH
  # - J7Kv9HrB
---

If the gradient of a curve is increasing, we say it is **convex**; if the gradient of a curve is decreasing, we say it is **concave**:

<geogebra id="e4wbbtgv"></geogebra>

I remember these words by the fact that a con**cave** section of curve looks a bit like a **cave.**

We have noted before (in the tutorial on finding turning points) that, if $\frac{dy}{dx}$ is increasing, its rate of change must be positive, so
$$
\begin{aligned}
\quad & \text{convex} \\[1em]
\Leftrightarrow \quad & \frac{dy}{dx} \text{ is increasing} \\[1em]
\Leftrightarrow \quad & \frac{d}{dx} \left( \frac{dy}{dx} \right) \geq 0 \\[1em]
\Leftrightarrow \quad & \frac{d^2y}{dx^2} \geq 0
\end{aligned}
$$
Similarly, for concave sections of curve, we have
$$
\begin{aligned}
\quad & \text{concave} \\[1em]
\Leftrightarrow \quad & \frac{dy}{dx} \text{ is decreasing} \\[1em]
\Leftrightarrow \quad & \frac{d}{dx} \left( \frac{dy}{dx} \right) \leq 0 \\[1em]
\Leftrightarrow \quad & \frac{d^2y}{dx^2} \leq 0
\end{aligned}
$$
So, in summary:
$$
\begin{aligned}
\text{convex} & \Leftrightarrow \frac{d^2y}{dx^2} \geq 0 \\[1em]
\text{concave} & \Leftrightarrow \frac{d^2y}{dx^2} \leq 0
\end{aligned}
$$

## Points of inflection

A **point of inflection** is a point where a curve stops being convex and becomes concave, or *vice versa.* In the diagram below, $P$ is a point of inflection. The curve is concave to the left of $P,$ and convex to the right.

<geogebra id="bgk3urrv"></geogebra>

At a point of inflection, the gradient of the tangent is not changing, and therefore
$$
\frac{d}{dx} \left( \frac{dy}{dx} \right) = 0
$$
which is better written as
$$
\frac{d^2y}{dx^2} = 0
$$

---

A curve is given by
$$
y = -\frac{x^3}{3} + 6x^2 - 32x
$$

 1. Find the range of values of $x$ for which the curve is concave.

 1. Sketch the curve, indicating only the coordinates of the point of inflection.
