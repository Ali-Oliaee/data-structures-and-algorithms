import { swap, newTrace, addToTrace, lastSorted, createKey } from "./helpers"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

const SelectionSort = (numbers) => {
  const trace = newTrace(numbers)

  for (let i = 0; i < numbers.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < numbers.length; j++) {
      addToTrace(trace, numbers, lastSorted(trace), [minIndex, j])
      if (numbers[j] < numbers[minIndex]) {
        addToTrace(trace, numbers, lastSorted(trace), [minIndex], [j])
        minIndex = j
        addToTrace(trace, numbers, lastSorted(trace), [minIndex], [j])
      }
    }

    addToTrace(trace, numbers, lastSorted(trace), [], [i, minIndex])
    swap(numbers, i, minIndex)
    addToTrace(trace, numbers, [...lastSorted(trace), i], [], [])
  }

  addToTrace(trace, numbers, [...lastSorted(trace), numbers.length - 1])
  return trace
}

export const SelectionSortKey = createKey("Comparing", "Swapping")

export const SelectionSortDesc = {
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Selection_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Selection Sort
      </a>
      is an in-place comparison sorting algorithm that divides the input list
      into two parts: the sublist of items already sorted, which is built up
      from left to right at the front (left) of the list, and the sublist of
      items remaining to be sorted that occupy the rest of the list. Initially,
      the sorted sublist is empty and the unsorted sublist is the entire input
      list. The algorithm proceeds by finding the smallest element in the
      unsorted sublist, exchanging (swapping) it with the leftmost unsorted
      element (putting it in sorted order), and moving the sublist boundaries
      one element to the right.
    </p>
  ),
  worstCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  bestCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
}

export const SelectionSortCode = (
  <SyntaxHighlighter language="cpp" style={tomorrow}>{`
void selectionSort(int arr[], int n){
  for (int i = n - 1; i >= 1; i--){
      int min_idx = i;
      for (j = 0; j < i; j++)
        if (arr[j] >= arr[min_idx])
          min_idx = j;
      swap(arr[min_idx], arr[i]);
  }
}`}</SyntaxHighlighter>
)

export default SelectionSort
