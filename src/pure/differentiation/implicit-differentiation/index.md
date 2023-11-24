---
title: Implicit differentiation
id: RladD9kH # VHhL1ebu # U1yRWENh # RladD9kH
vimeo: 111
problems:
  - l11J1rQc
  - QNqPyavg
  - Jq7qqhDU
  - U5wSly82
  - OZ0U0P8b
  - nWt3LfTX
  - NiwvikYl
  - lIC2aqnv
  - reqkPa0I
  - xYblGyYM
---

Sometimes, it is impossible to give the equation of a curve in the form

$$
y = f(x)
$$

for example, the set of $(x,y)$ satisfying

$$
\sqrt{y} + \sin(2y) = \frac{4x}{x^2 + 1}
$$

gives us the curve

<!-- <img style="max-height: 30vh; max-width: 90%; display: block; margin: auto;" src="/img/books/pure/differentiation/implicit-1.png"> -->

but we cannot give $y$ as an explicit function of $x.$ Rather, the points $y$
are defined _implicitly._

In this case, we still imagine $y$ is a function of $x,$ and to differentiate

$$
f(y)
$$

we use the chain rule:

$$
\frac{d}{dx} f(y) = f'(y) \frac{dy}{dx}
$$

---

1.  The curve $C$ is defined by

    $$
    xy^2 - 2x + y^2 + y - 3 = -4
    $$

    Verify that the point $P(-1,-3)$ lies on the curve, and find the rate of
    change of $y$ with respect to $x$ at this point.

1.  Find the equation of the tangent to the curve
    $$
    xy - 3x - 2y + 5 = -2
    $$
    at the point where $x = 3$.

<!-- # Problem

A curve is given by the equation
$$
3y^2 + 6xy + 4x^2 - 2y = 5
$$
Find an equation for the tangent to the curve at the point $P(-2,1)$ -->

<!-- # Problem

The implicit curve $C$ has equation
$$
3y^2 - 2x^2 - 3x + 2y + 5 = 0
$$
Find an equation for the tangent to the curve at the point $P(1,0).$ -->

<!-- # Problem

A curve is given by
$$
x^3 + y^3 + 3y^2 + 3y - 6x = 50 + 2xy
$$
Find an equation for the normal to the curve at the point $(4,2).$ -->

<!-- # Problem

Find the coordinates of the turning points of the curve
$$
9x^2 + 2y^2 + y = 1
$$

<hint>

Solve
$$
\frac{dy}{dx} = 0
$$

</hint>

# Problem

 1.

 By taking $\ln$ of both sides, and using implicit differentiation, differentiate
 $$
 y = a^{x}, \quad a > 0
 $$

 1.

 A different curve is given by
 $$
 y = \log_{b}(x), \quad b > 0
 $$
 Find $\frac{dy}{dx}$ for this curve

<hint>

For (b), rewrite this as
$$
b^{y} = x
$$
and use part (a) to help

</hint>

# Problem

Find, in exact form, the equation of the tangent to the curve
$$
y = \left(\frac{1}{2}\right)^{x}
$$
at the point where $x = 2.$

<hint>

Start by taking $\ln$ of both sides.

</hint>

# Problem

 1.

 Let
 $$
 y = \arcsin(x)
 $$
 Show that
 $$
 \frac{dy}{dx} = \frac{1}{\sqrt{1-x^2}}
 $$

 1.

 Let
 $$
 y = \arccos(x)
 $$
 Show that
 $$
 \frac{dy}{dx} = -\frac{1}{\sqrt{1-x^2}}
 $$

 1.

 Let
 $$
 y = \arctan(x)
 $$
 Show that
 $$
 \frac{dy}{dx} = \frac{1}{1+x^2}
 $$

<hint>

For part (a), rewrite this as
$$
\sin(y) = x
$$
and differentiate implicitly.

</hint>

<hint>

You also need to use the fact that
$$
\sin^2(x) + \cos^2(x) = 1
$$

</hint>

<hint>

For (c), remember that
$$
\sec^{2}(x) = \tan^{2}(x) + 1
$$

</hint>

# Problem

 1.

 Let
 $$
 y = f^{-1}(x)
 $$
 Show that, in general,
 $$
 \frac{dy}{dx} = \frac{1}{f'(f^{-1}(x))}
 $$

 1.

 Use this to prove that
 $$
 \frac{d}{dx} \ln(x) = \frac{1}{x}
 $$
 [You may assume that $\frac{d}{dx} e^x = e^x.$]

<hint>

Start by noting that
$$
y = f^{-1}(x) \Rightarrow f(y) = x
$$

</hint>

<hint>

Implicit differentiation gives you
$$
f'(y) \frac{dy}{dx} = 1
$$

</hint>

<hint>

For (b), notice that
$$
f(x) = e^x \Rightarrow f^{-1}(x) = \ln(x)
$$
and apply the formula you found.

</hint>

# Problem

In each case, find $\frac{dy}{dx}$

 1.

 $$
 \sin(xy) = \cos(x + y)
 $$

 1.

 $$
 \frac{y}{e^x} = \frac{e^y}{x}
 $$
 -->
