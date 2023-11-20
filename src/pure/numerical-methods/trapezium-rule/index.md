---
title: The trapezium rule
id: Z8fP1YXb
vimeo: 111
problems:
  - PfxQjtv8
  - DQ8eu5lU
  - wYPXWp9b
  - STLuOCYN
  - IDIQZS0H
  - Ah49zJbh
  - lhLPTajy
  - bau3xo7s
  # - iR9bOiPA
  # - N6wzZgKD
---

Consider the area of the shape below:

![](/img/learn/trapezium-1.png)

This area is bound between

 - the line $x = a$

 - the line $x = b$

 - the line $y = 0$ (the $x$ axis)

 - the curve $y = f(x)$

For this area, we use the special notation
$$
\text{Area} = \int_{a}^{b} f(x) \, dx
$$
This notation tells use where the area starts ($x = a$), where the area stops ($x = b$), and the function $f(x)$ which gives the curve. There are various methods for calculating exactly the area $\int_{a}^{b} f(x) \, dx$ which we will learn in the next chapter, but in this tutorial we will learn how to approximate areas like this using trapeziums.

## The trapezium rule

In the image below, we show how $4$ trapezia can be used to estimate the area under the curve (note that we have let $a = x_0$ and $b = x_4$).

![](/img/learn/trapezium-2.png)

The base of each trapezium is $h,$ and if the trapezia all have the same width then
$$
h = \frac{b-a}{4}
$$
Let's take a look at one of these trapezia

![](/img/learn/trapezium-3.png)

The area of the trapzium is
$$
T_i = \frac{h}{2}\left(y_{i-1} + y_{i}\right)
$$
and so the whole area can be approximated by
$$
\begin{aligned}
\int_{a}^{b} f(x) \, dx & \approx T_1 + T_2 + T_3 + T_4 \\[1em]
& = \frac{h}{2}\left(y_0 + y_1\right) + \frac{h}{2}\left(y_1 + y_2\right) + \frac{h}{2}\left(y_2 + y_3\right) + \frac{h}{2}\left(y_3 + y_4\right) \\[1em]
& = \frac{h}{2} \left\{ y_0 + y_1 + y_1 + y_2 + y_2 + y_3 + y_3 + y_4 \right\} \\[1em]
& = \frac{h}{2} \left\{ y_0 + y_4 + 2\left(y_1 + y_2 + y_3\right) \right\}
\end{aligned}
$$
This last line is the most convenient form of the trapezium rule.

More generally, using $n$ trapezia we get
$$
\int_{a}^{b} f(x) \, dx \approx \frac{h}{2} \left\{ y_0 + y_n + 2 \left( y_1 + y_2 + \ldots + y_{n-1} \right) \right\}
$$
where
$$
h = \frac{b-a}{n}
$$
Let's see how to use this in practice.

---

Using the trapezium rule with $5$ strips ($6$ ordinates), find an estimate for the area
$$
\int_{1}^{2} x^2 + 1 \, dx
$$
giving your answer to $3$ significant figures.
