---
id: XwVqpggn
vimeo: 111
answer: 126
---

### Problem 10

The table below is called a _magic square_ because, if you add together the
numbers in any column, row or diagonal you get the same number.

$$
\begin{array}{|c|c|c|}
\hline
2 & 7 & 6 \\ \hline
9 & 5 & 1 \\ \hline
4 & 3 & 8 \\ \hline
\end{array}
$$

In this case, the number you get is $15$, and so we say that the _magic number_
for this _magic square_ is $15$.

The below table is also a magic square:

$$
\begin{array}{|c|c|c|}
\hline
3n -2   & {}        & 2n+1  \\[0.5em] \hline
{}      & n^2 - 3n  & {}    \\[0.5em] \hline
{}      & 2(2n-3)   & {}    \\[0.5em] \hline
\end{array}
$$

There are two possible values for $n$, giving two different possible magic
squares. Work out the two possible magic squares.

Give the sum of all the numbers in the two possible magic squares.

<AnswerInput :answer="$frontmatter.answer" />

::: details Hint

The sum of the top row must equal the sum of the middle column.

:::

::: details Solution

The sum of the top row must equal the sum of the middle column, so:

$$
\begin{aligned}
(3n - 2) + (2n + 1) & = (n^2 - 3n) + (4n - 6) \\
5n - 1 & = n^2 + n - 6 \\
n^2 - 4n - 5 & = 0 \\
(n + 1)(n - 5) & = 0 \\
n & \in \{ -1, 5 \}
\end{aligned}
$$

When $n = -1$ we have

$$
\begin{array}{|c|c|c|}
\hline
-5  & 18    & -1  \\[0.5em] \hline
8   & 4     & 0   \\[0.5em] \hline
9   & -10   & 13  \\[0.5em] \hline
\end{array}
$$

When $n = 5$, we have

$$
\begin{array}{|c|c|c|}
\hline
13  & 6   & 11  \\[0.5em] \hline
8   & 10  & 12  \\[0.5em] \hline
9   & 14  & 7   \\[0.5em] \hline
\end{array}
$$

:::
