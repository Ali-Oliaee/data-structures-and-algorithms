import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createRange,
  createKey,
} from "./helpers"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

const QuickSort = (numbers) => {
  const trace = newTrace(numbers)

  function choosePivot(array, start, end) {
    return Math.floor(Math.random() * (end - start)) + start
  }

  function partition(array, start, end) {
    let i = start + 1
    let j = start + 1

    addToTrace(trace, array, lastSorted(trace), [start])

    while (j <= end) {
      if (array[j] < array[start]) {
        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [j],
          [],
          createRange(start + 1, i)
        )

        swap(array, i, j)

        addToTrace(
          trace,
          array,
          lastSorted(trace),
          [start],
          [i],
          [],
          createRange(start + 1, i)
        )
        i += 1
      }
      j += 1
    }

    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    )
    swap(array, start, i - 1)

    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [i - 1],
      [],
      [],
      createRange(start, i - 1)
    )
    return i - 1
  }

  function recursiveQuickSort(array, start, end) {
    if (start >= end) {
      if (start === end) {
        addToTrace(trace, array, [...lastSorted(trace), start])
      }
      return null
    }

    let pivot = choosePivot(array, start, end)

    addToTrace(trace, array, lastSorted(trace), [pivot])

    swap(array, start, pivot)

    addToTrace(trace, array, lastSorted(trace), [pivot])

    pivot = partition(array, start, end)

    addToTrace(trace, array, [...lastSorted(trace), pivot])

    recursiveQuickSort(array, start, pivot - 1)
    recursiveQuickSort(array, pivot + 1, end)
  }

  recursiveQuickSort(numbers, 0, numbers.length - 1)

  return trace
}

export const QuickSortKey = createKey(
  "Comparing",
  "Swapping",
  null,
  "Less than pivot"
)

export const QuickSortDesc = {
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Quicksort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quick Sort
        </a>
        is an efficient, in-place sorting algorith that in practice is faster
        than MergeSort and HeapSort. However, it is not a stable sorting
        algorithm, meaning that the relative positioning of equal sort items is
        not preserved.Quicksort is a divide and conquer algorithm. Quicksort
        first divides a large array into two smaller sub-arrays: the low
        elements and the high elements. Quicksort can then recursively sort the
        sub-arrays. The steps are:
      </p>
      <ol>
        <li>
          Pick an element, called a pivot, from the array. This is usually done
          at random.
        </li>
        <li>Move pivot element to the start of the array.</li>
        <li>
          <em>Partitioning:</em> reorder the array so that all elements with
          values less than the pivot come before the pivot, while all elements
          with values greater than the pivot come after it (equal values can go
          either way). After this partitioning, the pivot is in its final
          position. This is called the <em>partition</em> operation.
        </li>
        <li>
          Recursively apply the above steps to the sub-array of elements with
          smaller values and separately to the sub-array of elements with
          greater values.
        </li>
      </ol>
      <p>
        The base case of the recursion is an array of size zero or one, which
        are sorted by definition.
      </p>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em>
      <sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
}

export const QuickSortCode = (
  <SyntaxHighlighter language="cpp" style={tomorrow}>{`
void quickSort(int arr[], int low, int high) {
  if (low < high) 
    int pivotIdx = partition(arr, low, high);

  quickSort(arr, low, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, high);
}

int partition(int arr[], int left, int right) {
  int pivot = arr[left];
  int i = left;
  int j = right + 1;
  for (;;) {
    while (arr[++i] < pivot) 
      if (i >= right) break;
    while (arr[--j] > pivot)
      if (j <= left) break;
    if (i >= j) break;
    else swap(arr[i], arr[j]);
  }
  if (j == left) return j;
  swap(arr[left], arr[j]);
  return j;
}`}</SyntaxHighlighter>
)

export default QuickSort
