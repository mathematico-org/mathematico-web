---
title: Riemann sums
id: yk84F0rj
vimeo: 111
problems:
  - gqtMPehp
  - hw7c5N1n
  - P3eYzQL4
  - AoY78A0B
  - lUXopQNI
  - qPK3LlvF
  # - NRYo0iUA
  # - HZBJE51f
  # - lvjoHuj3
  # - eS5p89FB
---

Consider again the problem of finding the area
$$
\int_{a}^{b} f(x) \, dx
$$

![](/img/learn/riemann-1.png)

We've seen how we can do this with the trapezium rule, and Riemann sums are another way. In some ways, a Riemann sum is just a much simpler cousin of the trapezium rule. Instead of trapezia, we use rectangles:

<geogebra id="sbzjjdtq"></geogebra>

Nevertheless, if we keep adding more and more rectangles, the Riemann sum converges to the true area just as surely as the trapeziums would. Slide $n$ in the image above to see what happens as $n$ (the number of rectangles) becomes large.

Let's take a closer look at a rectangle

![](/img/learn/riemann-2.png)

We see its area is
$$
f(x_{i-1}) (x_i - x_{i-1})
$$
We often write $\Delta x = x_i - x_{i-1}$ for ease. When we add all the rectangles together, we get an approximation for the area:
$$
\int_{a}^{b} f(x) \, dx \approx \sum_{i=1}^{n} f(x_{i-1}) \Delta x
$$
As we add more and more rectangles, this approximation becomes more and more accurate. In fact
$$
\int_{a}^{b} f(x) \, dx = \lim_{n \rightarrow \infty} \sum_{i=1}^{n} f(x_{i-1}) \Delta x
$$
So this explains the notation: $\int$ is the area after the $\sum$ of rectangles has been smoothed out, and since the rectangles become very thin, the large $\Delta x$ becomes the small $dx$

---

Let
$$
f(x) = 2 x^{2}
$$
Given the below table of values
$$
\begin{array}{r|r}
x_{i} & f(x_{i}) \\ \hline -5 & 50 \\-3 & 18 \\-1 & 2 \\1 & 2 \\2 & 8 \\
\end{array}
$$
calculate a $4$-rectangle Riemann sum estimate for
$$
\int_{-5}^{2} 2 x^{2} \, dx
$$
