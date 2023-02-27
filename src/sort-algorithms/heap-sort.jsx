import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createRange,
  createKey,
} from "./helpers"

const HeapSort = (numbers) => {
  const trace = newTrace(numbers)

  const left = (i) => 2 * i + 1
  const right = (i) => 2 * i + 2
  const parent = (i) => Math.floor((i - 1) / 2)

  const maxHeapify = (array, i, heapSize) => {
    const leftChild = left(i)
    const rightChild = right(i)

    addToTrace(trace, array, lastSorted(trace), [i, leftChild])

    let largest =
      leftChild < heapSize && array[leftChild] > array[i] ? leftChild : i

    addToTrace(trace, array, lastSorted(trace), [largest, rightChild])

    if (rightChild < heapSize && array[rightChild] > array[largest])
      largest = rightChild

    if (largest !== i) {
      addToTrace(trace, array, lastSorted(trace), [], [i, largest])

      swap(array, i, largest)

      addToTrace(trace, array, lastSorted(trace), [], [i, largest])

      maxHeapify(array, largest, heapSize)
    }
  }

  const BuildMaxHeap = (array) => {
    const start = Math.floor(array.length / 2)
    const heapSize = array.length
    for (let i = start; i >= 0; i--) {
      maxHeapify(array, i, heapSize)
    }

    addToTrace(
      trace,
      array,
      lastSorted(trace),
      [],
      [],
      [],
      createRange(0, array.length)
    )
  }

  const heapSort = (array) => {
    BuildMaxHeap(array)
    let heapSize = array.length
    for (let i = array.length - 1; i > 0; i--) {
      addToTrace(trace, array, lastSorted(trace), [], [0, i])

      swap(array, 0, i)
      heapSize -= 1

      addToTrace(trace, array, [...lastSorted(trace), i], [], [0, i])

      maxHeapify(array, 0, heapSize)

      addToTrace(
        trace,
        array,
        lastSorted(trace),
        [],
        [],
        [],
        createRange(0, heapSize)
      )
    }
    addToTrace(trace, array, [...lastSorted(trace), 0])
  }

  heapSort(numbers)
  return trace
}

export const HeapSortKey = createKey(
  "Comparing",
  "Swapping",
  null,
  "Heap Built"
)

export const HeapSortDesc = {
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Heapsort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heap Sort
        </a>{" "}
        can be thought of as an improved selection sort that uses the heap data
        structure rather than a linear-time search to find the maximum or
        minimum element. It is an in-place sorting algorithm that is not stable
        and has a somewhat slower running time than Quicksort in practice.
      </p>
      <p>
        The heapsort algorithm can be divided into two parts. In the first step,
        a heap is built out of the data. The heap is often placed in an array
        with the layout of a complete binary tree. In the second step, a sorted
        array is created by repeatedly removing the largest element from the
        heap (the root of the heap), and inserting it into the array. The heap
        is updated after each removal to maintain the heap property. Once all
        objects have been removed from the heap, the result is a sorted array.
      </p>
      <ol>
        <li>
          Call the buildMaxHeap() function on the list. Also referred to as
          heapify(), this builds a heap from a list in O(n) operations.
        </li>
        <li>
          Swap the first element of the list with the final element. Decrease
          the considered range of the list by one.
        </li>
        <li>
          Call the <em>siftDown()</em>, also called <em>maxHeapify()</em>{" "}
          function on the list to sift the new first element to its appropriate
          index in the heap.
        </li>
        <li>
          Go to step (2) unless the considered range of the list is one element.
        </li>
      </ol>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em>log <em>n</em>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em>log <em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em>log <em>n</em>)
    </span>
  ),
}

export const HeapSortCode = (
  <SyntaxHighlighter language="cpp" style={tomorrow}>{`
void heapSort(int arr[], int n){
  // Build heap (rearrange array)
  for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);
  // One by one extract an element from heap
  for (int i=n-1; i>0; i--){
    // Move current root to end
    swap(arr[0], arr[i]);
    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
} 

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
void heapify(int arr[], int n, int i){
  int largest = i; // Initialize largest as root
  int l = 2*i + 1; // left = 2*i + 1
  int r = 2*i + 2; // right = 2*i + 2
  // If left child is larger than root
  if (l < n && arr[l] > arr[largest]) largest = l;
  // If right child is larger than largest so far
  if (r < n && arr[r] > arr[largest]) largest = r;
  // If largest is not root
  if (largest != i) {
    swap(arr[i], arr[largest]);
    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
} `}</SyntaxHighlighter>
)

export default HeapSort
