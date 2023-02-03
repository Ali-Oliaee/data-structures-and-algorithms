import { swap, newTrace, addToTrace, createRange, createKey } from "./helpers"

const ShellSort = (numbers) => {
  const trace = newTrace(numbers)

  for (
    let gap = Math.floor(numbers.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let j = gap; j < numbers.length; j++) {
      for (let i = j - gap; i >= 0; i -= gap) {
        addToTrace(trace, numbers, [], [i, i + gap])
        if (numbers[i + gap] < numbers[i]) {
          addToTrace(trace, numbers, [], [], [i, i + gap])
          swap(numbers, i, i + gap)
          addToTrace(trace, numbers, [], [], [i, i + gap])
        } else {
          break
        }
      }
    }
  }

  addToTrace(trace, numbers, createRange(0, numbers.length))
  return trace
}

export const ShellSortKey = createKey("Comparing", "Swapping")

export const ShellSortDesc = {
  title: "Shell Sort",
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Shellsort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shell Sort
        </a>
        , also know as Shell's method is a generalization of insertion sort
        where elements <em>gap</em> distance apart are compared rather than
        adjacent elements. The method starts by sorting pairs of elements far
        apart from each other, then progressively reducing the gap between
        elements to be compared. Starting with far apart elements, it can move
        some out-of-place elements into position faster than a simple nearest
        neighbor exchange. The running time of ShellSort is heavily dependent on
        the gap sequence it uses. For many practical variants, determining their
        time complexity remains an open problem. It is in-place sorting
        algorithm that is not stable.
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
      O(<em>n</em>
      <sup>3/2</sup>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  space: <span>O(1)</span>,
}

export default ShellSort
