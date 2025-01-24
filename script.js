function insertionSort(arr) {
    // Start from the second element
    for (let i = 1; i < arr.length; i++) {
        // Current element to be inserted
        let currentElement = arr[i];
        
        // Find the correct position to insert
        let j = i - 1;
        while (j >= 0 && arr[j] > currentElement) {
            // Shift elements to the right
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the current element in its correct position
        arr[j + 1] = currentElement;
    }
    
    return arr;
}

// Example usage
let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", insertionSort(unsortedArray));