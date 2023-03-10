import { newTrace, addToTrace, createKey } from "./helpers"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

const InsertionSort = (numbers) => {
  const trace = newTrace(numbers)

  for (let i = 1; i < numbers.length; i++) {
    let value = numbers[i]
    let hole = i

    addToTrace(trace, numbers, [], [i])
    while (hole > 0 && numbers[hole - 1] > value) {
      addToTrace(trace, numbers, [], [hole], [hole - 1])
      numbers[hole] = numbers[hole - 1]
      hole -= 1
      addToTrace(trace, numbers, [], [], [hole, hole + 1])
    }
    addToTrace(trace, numbers, [], [], [], [hole])
    numbers[hole] = value
    addToTrace(trace, numbers, [], [], [], [hole])
  }

  addToTrace(trace, numbers, [...Array(numbers.length).keys()])
  return trace
}

export const InsertionSortKey = createKey(
  "Comparing",
  "Swapping",
  "Overwrite from memory"
)
export const InsertionSortDesc = {
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Insertion_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Insertion Sort
      </a>
      is a simple sorting algorithm that iterates through an array and at each
      iteration it removes one element from the array, finds the location it
      belongs to in the sorted list and inserts it there, repeating until no
      elements remain in the unsorted list. It is an in-place, stable sorting
      algorithm that is inefficient on large input arrays but works well for
      data sets that are almost sorted. It is more efficient in practice
      compared to other quadratic sorting algorithms like bubble sort and
      selection sort.
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
  bestCase: <span>O(n)</span>,
}

export const InsertionSortCode = (
  <SyntaxHighlighter language="cpp" style={tomorrow}>{`
void insertionSort(int arr[], int n){
  for (int i = 1; i < n; i++){
      int next = arr[i];
      for (int j = i - 1; j >= 0 && arr[j] > next; j--)
        arr[j + 1] = next;
  }
}`}</SyntaxHighlighter>
)

export default InsertionSort
