---
title: The quadratic formula
id: YTdsO2qZ
vimeo: 433576393
problems:
  - GpomZCMJ
  - UznZmeNj
  - m3JLfIhU
  - TItadI6p
  - ptALljga
  - Gedb8LSI
  - Qr6K3Khq
  - EjS1cazb
  - bgvOJNVt
  - s0HKNmB0
---

# {{$frontmatter.title}}

## Notes

By now, we have seen that quadratics can be solved by factorising or completing
the square. There is a third way, and that is called the _quadratic formula_.
Basically, we solve the general equation

$$
ax^2 + bx + c = 0
$$

by completing the square, and we get the formula

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

This is a formula we should memorise as it is very useful for solving hard
quadratics quickly.

::: details Proof of formula

We complete the square on the equation $ax^2 + bx + c = 0$ to find the general
formula for the roots

$$
\begin{aligned}
ax^2 + bx + c & = 0 \\
a \left[ x^2 + \frac{b}{a}x \right] + c & = 0 \\
a \left[ \left( x + \frac{b}{2a} \right) - \frac{b^2}{4a^2} \right] + c & = 0 \\
a \left( x + \frac{b}{2a} \right) - \frac{b^2}{4a} + c & = 0 \\
a \left( x + \frac{b}{2a} \right) & = \frac{b^2}{4a} - c \\
a \left( x + \frac{b}{2a} \right) & = \frac{b^2 - 4ac}{4a} \\
\left( x + \frac{b}{2a} \right) & = \frac{b^2 - 4ac}{4a^2} \\
x + \frac{b}{2a} & = \pm \sqrt{\frac{b^2 - 4ac}{4a^2}} \\
x & = - \frac{b}{2a} \pm \frac{\sqrt{b^2 - 4ac}}{2a} \\
x & = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \\
\end{aligned}
$$

:::

## Example

<Example>

Solve the following equations using the quadratic formula:

1.  $2x^2 - x - 6 = 0$

1.  $x^2 + 2 - 6x = 0$

1.  $x^2 - 2\sqrt{2}x + 2 = 0$

1.  $x^2 + x = -3$

</Example>

## Exercise

<Exercise :id="$frontmatter.id" />
