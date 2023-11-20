---
title: First principles
id: TA9qR29g
vimeo: 111
problems:
 - eMQAKqIO
 - ziXrrgFI
 - dpmQuWIK
 - itoy6zRo
 - xTFJa3Gb
 - ZMteho76
 - wi49S0cm
 # - PfRMFd3r
 # - X3FZZmD9
---

What if we want to know the *exact* gradient at some point on a curve?

We can actually do that by considering what happens when the secant actually *becomes* the tangent. That is, we consider what happens to
$$
\frac{f(x+h) - f(x)}{h}
$$
as $h$ tends to $0.$

<geogebra id="axgreab7"></geogebra>

This can be written using limit notation as
$$
\frac{dy}{dx} = \lim_{h \rightarrow 0} \frac{f(x+h) - f(x)}{h}
$$
After finding a formula for $\frac{dy}{dx},$ we can then use it to calculate the gradient at any desired point on the curve! This is much more convenient.

The whole process of finding $\frac{dy}{dx}$ in this way is called *differentiation from first principles*. Let's see an example of this.

---

A curve is given by
$$
y = x^2 - x
$$

Use differentiation from first principles to find a formula for
$$
\frac{dy}{dx}
$$
and hence find the gradient at the point on the curve where $x = 3.$
