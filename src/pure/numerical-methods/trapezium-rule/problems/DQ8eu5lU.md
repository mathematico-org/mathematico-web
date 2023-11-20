---
id: DQ8eu5lU
vimeo: 111
answer: 0.0701
---

A team of engineers is designing a plane. The cross-section of the wing of the plane is to be modeled by the curves
$$
y = \pm x(x-1)^3, \quad 0 \leq x \leq 1
$$

![](/img/learn/trapezium-6.png)

The engineers require an estimate for the cross-sectional area of the wing.

 1. Use the trapezium rule with $5$ strips ($6$ ordinates) to estimate the cross-sectional area of the wing.

 1. Explain, by drawing a suitable diagram, whether this value is an overestimate or an underestimate, and suggest how the accuracy of the estimate may be improved.

 1. The team decide to change their design, so it is now modeled by the curves
    $$
    \begin{aligned}
    y & = -x(x-1)^3, \quad 0 \leq x \leq 1 \\[1em]
    y & = \frac{1}{2} x (x-1)^3, \quad 0 \leq x \leq 1
    \end{aligned}
    $$

    ![](/img/learn/trapezium-13.png)

    Give an estimate for the cross-sectional area of the new shape.

---

For (a), just focus on the top half first:

![](/img/learn/trapezium-12.png)

Because the shape is symmetrical, you can use this answer to get the area of the whole shape.

---

For the last part, notice that halving the height of a shape will halve its area, so the new area should be $\frac{3}{4}$ the old area.

---

Give the area found in part (c), correct to $3$ significant figures.
