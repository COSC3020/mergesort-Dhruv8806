[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12442646&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


The runtime analysis of my merge sort algorithm would be $\ O(n^2 log (n))$. Because the outer loop segments the array into smaller parts, and the inner loop manages the merging process. The outer loop's iteration depends on how many times the array is divided, which would be $\ log(n)$ for $\ 'n'$ elements. During each division, the left subarray's elements are compared with those in the right subarray, with potential swaps and shifts for correct ordering. The merge step in this implementation takes $\ n^2$ . With this process we get a complexity of $\Theta(n^2 log n)$, signifying that sorting becomes more time-consuming as the input array size grows, especially compared to standard merge sort.

