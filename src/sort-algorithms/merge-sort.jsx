import { newTrace, addToTrace, createKey } from "./helpers"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

const MergeSort = (numbers) => {
  const trace = newTrace(numbers)

  function merge(original, start, mid, end) {
    const left = original.slice(start, mid)
    const right = original.slice(mid, end)
    let i = 0
    let j = 0
    let k = 0
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        addToTrace(trace, original, [], [], [], [k + start])
        original[k + start] = left[i]
        i++
        addToTrace(trace, original, [], [], [], [k + start])
      } else {
        addToTrace(trace, original, [], [], [], [k + start])
        original[k + start] = right[j]
        j++
        addToTrace(trace, original, [], [], [], [k + start])
      }
      k++
    }
    while (i < left.length) {
      addToTrace(trace, original, [], [], [], [k + start])
      original[k + start] = left[i]
      i++
      k++
      addToTrace(trace, original, [], [], [], [k + start])
    }
    while (j < right.length) {
      addToTrace(trace, original, [], [], [], [k + start])
      original[k + start] = right[j]
      j++
      k++
      addToTrace(trace, original, [], [], [], [k + start])
    }

    left.length = 0
    right.length = 0
  }

  function recursiveMergeSort(original, start, end) {
    const length = end - start
    if (length < 2) {
      if (length < 1) return original
      else return [original[start]]
    }

    const midPoint = Math.floor((start + end) / 2)

    addToTrace(
      trace,
      original,
      [],
      [...Array(midPoint - start).keys()].map((i) => i + start)
    )
    recursiveMergeSort(original, start, midPoint)

    addToTrace(
      trace,
      original,
      [],
      [...Array(end - midPoint).keys()].map((i) => i + midPoint)
    )
    recursiveMergeSort(original, midPoint, end)

    merge(original, start, midPoint, end)
  }

  recursiveMergeSort(numbers, 0, numbers.length)

  addToTrace(trace, numbers, [...Array(numbers.length).keys()])
  return trace
}

export const MergeSortKey = createKey(
  "Call Merge Sort",
  null,
  "Overwrite from axillary array"
)
export const MergeSortDesc = {
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Merge_sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merge Sort
        </a>{" "}
        is an efficient, stable sorting algorith that makes use of the divide
        and conquer strategy. Conceptually the algorithm works as follows:
      </p>
      <ol>
        <li>
          Divide the unsorted list into <em>n</em> sublists, each containing one
          element(a list of one element is considered sorted)
        </li>
        <li>
          Repeatedly merge sublists to produce new sorted sublists until there
          is only one sublist remaining. This will be the sorted list.
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

export const MergeSortCode = (
  <SyntaxHighlighter language="cpp" style={tomorrow}>{`
void mergeSort(int arr[], int low, int high){
  if(low < high)
    int mid = (low + high) / 2;

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);

    merge(arr, low, mid, high);
}

void merge(int arr[], int low, int mid, int high){
  int n = high - low + 1;
  int *b = new int[n];
  int left = low, right = mid + 1, bIdx = 0;

  while(left <= mid && right <= high){
    if(arr[left] <= arr[right])
      b[bIdx++] = arr[left++];
    else
      b[bIdx++] = arr[right++];
  }

  while(left <= mid) b[bIdx++] = arr[left++];
  while(right <= high) b[bIdx++] = arr[right++];

  for(int i = 0; i < n; i++)
    arr[low + i] = b[i];

  delete[] b;
}`}</SyntaxHighlighter>
)

export default MergeSort
