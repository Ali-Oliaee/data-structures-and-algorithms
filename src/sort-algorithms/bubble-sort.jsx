import { swap, newTrace, addToTrace, lastSorted, createKey } from "./helpers"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

const BubbleSort = (numbers) => {
  const trace = newTrace(numbers)

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      addToTrace(trace, numbers, lastSorted(trace), [j, j + 1])
      if (numbers[j] > numbers[j + 1]) {
        swap(numbers, j, j + 1)
        addToTrace(trace, numbers, lastSorted(trace), [], [j, j + 1])
      }
    }

    addToTrace(trace, numbers, [...lastSorted(trace), numbers.length - 1 - i])
  }

  return trace
}

export const BubbleSortKey = createKey("Comparing", "Swapping")
export const BubbleSortDescription = {
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Bubble_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bubble Sort
      </a>
      is a simple sorting algorithm that repeatedly steps through the list,
      compares adjacent elements and swaps them if they are in the wrong
      order.The pass through the list is repeated until the list is sorted. The
      algorithm, which is a comparison sort, is named for the way smaller or
      larger elements "bubble" to the top of the list. Although the algorithm is
      simple, it is too slow and impractical for most problems
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

export const BubbleSortCode = (
  <SyntaxHighlighter language="cpp" style={tomorrow}>{`
  void BubbleSort(int * arr, int n){
      int arr[6], i, elem;
      cout<<"Enter 5 Array Elements: ";
      for(i=0; i<5; i++)
          cin>>arr[i];
      cout<<"Enter Element to Insert: ";
      cin>>elem;
      arr[i] = elem;
      cout<<"The New Array is:";
      for(i=0; i<6; i++)
          cout<<arr[i]<<"  ";
      cout<<endl;
      return 0;
  }`}</SyntaxHighlighter>
)

export default BubbleSort
