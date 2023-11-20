---
title: Integration by substitution (indefinite)
id: NyCV8EUc
vimeo: 111
problems:
 - Kub81rs5
 - fu4288ah
 - NIyQJB8t
 - hX0QqRK6
 - gYIpxp9k
 - kQCwUgy6
 - HJCkHMjK
 # - uhDSj2El
 # - NosqUBlW
 # - ydbxK9Zd
---

Integration by substitution is basically the chain rule in reverse.

For example, because
$$
\frac{d}{dx} \sin(x^2) = 2x\cos(x^2)
$$
we know that
$$
\int 2x \cos(x^2) \, dx = \sin(x^2) + c
$$
More generally, because
$$
\frac{d}{dx} f(g(x)) = f'(g(x)) g'(x)
$$
we can say that
$$
\int f'(g(x))g'(x) \, dx = f(g(x)) + c
$$
However, sometimes it is very hard to *see* that a function is the result of a chain rule, and so we use something called $u$-substitution to make it easier. In the next example, we will see $u$-substitution at work.

---

 1. Use integration by substitution to find
    $$
    \int 2x \cos(x^2) \, dx
    $$

 1. Using the substitution $u = x\ln x - x,$ find
    $$
    \int 3x^2 \ln(x) (\ln(x) - 1)^2 \, dx
    $$
