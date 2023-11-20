---
title: Using history to inspire discovery lessons 
---

This post contains a few thoughts about how the history of mathematics can help plan for guided discovery in maths lessons. It is by no means how I plan all my lessons, but it has inspired some of my favourite activities.

The mathematics we teach in school was discovered over thousands of years, and we teach it in just a few. The fact that we as a species can do that is miraculous, but editing and compressing so much human discovery into a relatively short time can, in my experience, make certain concepts feel like they don't 'belong' to the learner. The idea of the student 'owning their knowledge' underpins a lot of my planning as a teacher, so I like to give some thought to how the original discoverers might have felt when unearthing these concepts.

## The discriminant and the determinant

The discriminant, $\Delta = b^2 - 4ac,$ is a concept that lends itself very nicely to this sense of ownership. The approach I normally take is to prepare a foundation for the student by drawing attention to the impossibility of defining the square root of a negative in the real numbers, and then ask them to solve
$$
x^2 + 2x + 5 = 0
$$
using the quadratic formula, followed by a discussion. It's a nice, quick scaffolded discovery that can make $\Delta$ very satisfying to learn and teach. The technique can then become more procedural without eroding the student's sense of ownership.

The determinant is a cousin of the discriminant, but almost every textbook I've read starts by *defining* it, usually based on a matrix. The determinant, when calculated, can tell us whether or not a system of simultaneous equations has a unique solution (which is why I put it in the family tree near the discriminant). Its calculation is easy for a system with two unknowns:
$$
\begin{aligned}
ax + by & = p \\
cd + dy & = q
\end{aligned}
$$
has determinant $ad - bc$. If $ad - bc = 0,$ there is not a unique solution $x, y$ for the system of equations. 

Despite its simplicity, the discriminant never really *belonged* to me, so I always looked upon it with an air of suspicion. Layer upon layer of abstraction were built on top of this mysterious number: more unknowns, matrix representation, eigenvalues, transformations. I became adept with it, but it was never *mine*. I didn't want this for my students.

## Emulating history

As I've mentioned, when I'm struggling for a good idea to teach, I sometimes reflect on the history of a concept, and try to somehow emulate that history in the classroom. What must 'discovering' negative numbers have felt like? How do we isolate that feeling? The key leap I'm trying to establish is that $-7$ is not an operation followed by a positive number, it is a number itself. I found that an exercise such as this worked really well:

<blockquote>

The table below is called a *magic square* because, if you add together the numbers in any column, row or diagonal you get the same number.

$$
\begin{array}{|c|c|c|}
\hline
2 & 7 & 6 \\ \hline
9 & 5 & 1 \\ \hline
4 & 3 & 8 \\ \hline
\end{array}
$$

In this case, the number you get is $15$, and so we say that the *magic number* for this *magic square* is $15$.

The table below is a magic square of integers, but with some numbers missing. Can you find the magic number, and hence complete the magic square?

$$
\begin{array}{|c|c|c|}
\hline
1 & & \\ \hline
& 2 & \\ \hline
& 4 & 3 \\ \hline
\end{array}
$$

</blockquote>

By having a box drawn around the negative number, and isolating *addition* as the operation, students are led to think in a similar way to the accountants balancing their accounts all those centuries ago.

Combined with numberline work, discussion and consolidation, this can be a powerful sense-making experience for learners, and they often ask a question many famous mathematicians throughout history have asked: *Are we allowed to use minus numbers?*

## Back to the determinant

The determinant has been rediscovered several times throughout history, but it was known before matrices were being used. It was first discovered for a $2 \times 2$ system by *elimination*:

$$
\begin{aligned}
ax + by & = p \\
cx + dy & = q \\
\\
(ax + by & = p) \times c \\
(cx + dy & = q) \times a \\
\\
acx + bcy & = cp \\
acx + ady & = aq \\
\\
(ad - bc)y & = aq - cp \\
\\
y & = \frac{aq - cp}{ad - bc}
\end{aligned}
$$
so $y$ can only be determined uniquely on the condition that $ad - bc \neq 0.$ Allowing students to follow in history's footsteps by having them solve this system by elimination uses only what they already know to discover the determinant for themselves, with no mention of matrices, and a more formal discussion can then build on this.

Incidentally, by also solving for $x,$ the inverse of a $2 \times 2$ matrix can be found.

## Final thoughts

The ideas of discovery and ownership have, for me, motivated some really nice ideas for lessons, or lesson segments. Following historical precedents sometimes gives me the inspiration needed to plan for this type of lesson, because they automatically represent a natural method of discovery. The process requires structuring, scaffolding and focusing by the teacher, otherwise it takes too long and can be more confusing than helpful. I usually find this type of teaching harder to plan for so I can't do it every lesson.

This kind of discovery is no replacement for the establishment of procedural understanding, and is sometimes antagonistic to it. But even if guided discovery doesn't necessarily help with recall or procedural understanding, it can definitely contribute positively to the student's meta-cognitive experiences and impart the attitude that mathematics is an inherently creative subject to which they can contribute in the future.