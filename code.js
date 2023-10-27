function mergesort(array) {
    // "const" works as well it's just I perferred 'let' to declare a variable for the length of the input array
    let len = array.length;

    // Creates a temporary array to hold intermediate results
    //let tempArr = new Array(len);

    // Used 'for' loop for each set of elements to be merged
    for (let currentLen = 1; currentLen < len; currentLen *= 2) { // part of it, is from "medium"
        for (let leftSInd = 0; leftSInd < len - 1; leftSInd += 2 * currentLen) { 
            // Calculates the middle and right end indices for the current merge
            let mid = Math.min(leftSInd + currentLen - 1, len - 1); // part of it, is from "stackoverflow & medium"
            let rightEInd = Math.min(leftSInd + 2 * currentLen - 1, len - 1);

            // Initializes left and right indices for merging
            let leftIdx = leftSInd;
            let rightIdx = mid + 1;

            // Copies elements from the original array to the temporary array
            // for (let i = leftSInd; i <= rightEInd; i++) {
            //     tempArr[i] = array[i];
            // }

            while (leftIdx <= mid && rightIdx <= rightEInd) {
                if (array[leftIdx] <= array[rightIdx]){
                    leftIdx++;
                } else {
                    const temp = array[rightIdx];
                    for (let i = rightIdx; i > leftIdx; i--){
                        array[i] = array [ i - 1];
                    }
                    array[leftIdx] = temp;

                    leftIdx++;
                    mid++;
                    rightIdx++;
                }
            }

            // for (let i = leftSInd; i <= rightEInd; i++) {
            //     if (leftIdx > mid) {
            //         array[i] = tempArr[rightIdx++];
            //     } else if (rightIdx > rightEInd) {
            //         array[i] = tempArr[leftIdx++];
            //     } else if (tempArr[leftIdx] <= tempArr[rightIdx]) {
            //         // Compares elements and copy the smaller one into the original array
            //         array[i] = tempArr[leftIdx++];
            //     } else {
            //         array[i] = tempArr[rightIdx++];
            //     }
            // }
        }
    }

    
    return array; // Return the sorted array
}

// Example usage:
var arr1 = [3, 5, 6, 1, 4, 2];
console.log("Original Array Elements");
console.log(arr1);

console.log("Sorted Array Elements");
console.log(mergesort(arr1));


/*
Sources Used: 
TA: Got help from the TA, as I was using a "tempArray"
https://medium.com/swlh/merge-sort-algorithm-101-c4fdea276289
https://stackoverflow.com/questions/63548204/iterative-approach-of-merge-sort-in-javascript
*/
