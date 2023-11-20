---
id: S2oAStWy
vimeo: 111
tags:
   - proof
---

Let $f$ and $g$ be two differentiable functions.

 1. Show that
    $$
    \begin{aligned}
    \,\, & \frac{f(x+h)g(x+h) - f(x)g(x)}{h} \\[1em]
    = \,\, & g(x+h) \, \left( \frac{f(x+h) - f(x)}{h} \right) + f(x) \, \left( \frac{g(x+h) - g(x)}{h} \right)
    \end{aligned}
    $$

 1. Hence, prove the product rule from first principles.

---

For (a), it is easier to start from the right-hand side and prove this is equal to the left-hand side

---

By first principles, if
$$
y = f(x)g(x)
$$
then
$$
\frac{dy}{dx} = \lim_{h \rightarrow 0} \frac{f(x+h)g(x+h) - f(x)g(x)}{h}
$$
