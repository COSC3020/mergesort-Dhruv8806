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


The run-time analysis of the merge sort algorithm which I believe would be $\ O(n log (n))$ , because it involves dividing the array into smaller parts and then combining them, while comparing and rearranging elements. The division occurs in the first loop, in the outer loop, which iterates $\log_2(n)$ times, where n is the array size, to split the array into smaller segments. The merging process, performed within the inner loop,  ensures the sorted combination of these segments, involving element shifting as needed to maintain order, especially when merging elements from the left and right subarrays. The worst-case time complexity will be $\Theta$ $\(n log (n))$, which the time it takes to sort the array increases with the array size.

