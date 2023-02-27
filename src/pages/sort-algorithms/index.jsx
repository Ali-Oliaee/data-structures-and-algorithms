import { useEffect, useState } from "react"
import { SortColorKey, SortDescription, SortPreview } from "@/components"
import MainLayout from "@/layouts"
import { Button, Progress, Row, Select, message } from "antd"
import sortAlgorithms from "@/utils/sort-algorithms"
import arrayLength from "@/utils/array-length"
import BubbleSort, {
  BubbleSortKey,
  BubbleSortDescription,
  BubbleSortCode,
} from "@/sort-algorithms/bubble-sort"
import HeapSort, {
  HeapSortKey,
  HeapSortDesc,
  HeapSortCode,
} from "@/sort-algorithms/heap-sort"
import InsertionSort, {
  InsertionSortKey,
  InsertionSortDesc,
  InsertionSortCode,
} from "@/sort-algorithms/insertion-sort"
import MergeSort, {
  MergeSortKey,
  MergeSortDesc,
  MergeSortCode,
} from "@/sort-algorithms/merge-sort"
import QuickSort, {
  QuickSortKey,
  QuickSortDesc,
  QuickSortCode,
} from "@/sort-algorithms/quick-sort"
import SelectionSort, {
  SelectionSortKey,
  SelectionSortDesc,
  SelectionSortCode,
} from "@/sort-algorithms/selection-sort"
import sortSpeeds from "@/utils/sort-speeds"
import { useRef } from "react"
import {
  PauseOutlined,
  PlayCircleOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from "@ant-design/icons"
import "./styles.scss"

const SortAlgorithmsPage = () => {
  const ALGORITHM = {
    "Bubble Sort": BubbleSort,
    "Selection Sort": SelectionSort,
    "Insertion Sort": InsertionSort,
    "Merge Sort": MergeSort,
    "Quick Sort": QuickSort,
    "Heap Sort": HeapSort,
  }

  const ALGORITHM_KEY = {
    "Bubble Sort": BubbleSortKey,
    "Selection Sort": SelectionSortKey,
    "Insertion Sort": InsertionSortKey,
    "Merge Sort": MergeSortKey,
    "Quick Sort": QuickSortKey,
    "Heap Sort": HeapSortKey,
  }

  const ALGORITHM_DESC = {
    "Bubble Sort": BubbleSortDescription,
    "Selection Sort": SelectionSortDesc,
    "Insertion Sort": InsertionSortDesc,
    "Merge Sort": MergeSortDesc,
    "Quick Sort": QuickSortDesc,
    "Heap Sort": HeapSortDesc,
  }

  const ALGORITHM_CODE = {
    "Bubble Sort": BubbleSortCode,
    "Selection Sort": SelectionSortCode,
    "Insertion Sort": InsertionSortCode,
    "Merge Sort": MergeSortCode,
    "Quick Sort": QuickSortCode,
    "Heap Sort": HeapSortCode,
  }
  const [messageApi, contextHolder] = message.useMessage()
  const [trace, setTrace] = useState([])
  const [traceStep, setTraceStep] = useState(-1)
  const [firstRun, setFirstRun] = useState(true)
  const [originalArray, setOriginalArray] = useState([])
  const [array, setArray] = useState([])
  const [groupA, setGroupA] = useState([])
  const [groupB, setGroupB] = useState([])
  const [groupC, setGroupC] = useState([])
  const [groupD, setGroupD] = useState([])
  const [sortedIndices, setSortedIndices] = useState([])
  const [timeoutIds, setTimeoutIds] = useState([])
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [algorithm, setAlgorithm] = useState("Bubble Sort")
  const [arraySize, setArraySize] = useState(10)
  const prevArray = useRef("")
  const prevTrace = useRef("")
  const prevTraceStep = useRef("")

  useEffect(() => {
    prevArray.current = array
  }, [array])

  useEffect(() => {
    prevTrace.current = trace
  }, [trace])

  useEffect(() => {
    prevTraceStep.current = traceStep
  }, [traceStep])

  useEffect(() => {
    if (prevArray.current !== array) reset(array)
    if (prevTrace.current !== trace) {
      clearTimeouts()
      setTrace(trace)
    }
  }, [array, trace, arraySize, algorithm])

  const reset = (array) => {
    setArray(array)
    setTrace([])
    setTraceStep(-1)
    setGroupA([])
    setGroupB([])
    setGroupC([])
    setGroupD([])
    setSortedIndices([])
    setOriginalArray([...array])
  }

  const clearTimeouts = () => {
    timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId))
    setTimeoutIds([])
  }

  const changeVisualState = (visualState) => {
    setArray(visualState.array)
    setGroupA(visualState.groupA)
    setGroupB(visualState.groupB)
    setGroupC(visualState.groupC)
    setGroupD(visualState.groupD)
    setSortedIndices(visualState.sortedIndices)
  }

  const createTrace = () => {
    const numbers = [...array]
    const sort = ALGORITHM[algorithm]
    if (sort) {
      const trace = sort(numbers)
      setTrace(trace)
    }
  }

  const run = (trace) => {
    if (firstRun)
      return messageApi.info(
        "Welcome to the Sorting Visualizer! Please select a sorting algorithm to begin."
      )

    const timeoutIds = []
    const timer = 250 / playbackSpeed

    trace.forEach((item, i) => {
      let timeoutId = setTimeout(
        (item) => {
          setTraceStep(prevTraceStep.current + 1)
          changeVisualState(item)
        },
        i * timer,
        item
      )
      timeoutIds.push(timeoutId)
    })

    let timeoutId = setTimeout(clearTimeouts, trace.length * timer)
    timeoutIds.push(timeoutId)
    setTimeoutIds(timeoutIds)
  }

  const generateRandomArray = () => {
    const getRandomInt = (max) =>
      Math.floor(Math.random() * Math.floor(max)) + 1

    const array = Array.from({ length: arraySize }, () => getRandomInt(100))

    setArray(array)
    reset(array)
    setTrace([])
    createTrace()
  }

  const pause = () => clearTimeouts()

  useEffect(() => {
    generateRandomArray()
  }, [algorithm, arraySize])

  const continueSort = () => run(trace.slice(traceStep))

  const stepForward = () => {
    if (firstRun)
      return messageApi.info(
        "Welcome to the Sorting Visualizer! Please select a sorting algorithm to begin."
      )
    if (traceStep < trace.length - 1) {
      const item = trace[traceStep + 1]
      setTraceStep(traceStep + 1)
      changeVisualState(item)
    }
  }

  const stepBackward = () => {
    if (firstRun)
      return messageApi.info(
        "Welcome to the Sorting Visualizer! Please select a sorting algorithm to begin."
      )
    if (traceStep > 0) {
      const item = trace[traceStep - 1]
      setTraceStep(traceStep - 1)
      changeVisualState(item)
    }
  }

  const adjustPlaybackSpeed = (speed) => {
    const playing = timeoutIds.length > 0
    pause()
    const playbackSpeed = Number(speed.split("x")[0])
    setPlaybackSpeed(playbackSpeed)
    playing && continueSort()
  }

  return (
    <MainLayout>
      {contextHolder}
      <Row justify="end">
        <Select
          options={sortAlgorithms}
          placeholder="Sort Algorithm"
          onChange={(value) => {
            setAlgorithm(value)
            setFirstRun(false)
            generateRandomArray()
          }}
          bordered={false}
        />
        <Select
          options={arrayLength}
          value={arraySize}
          onChange={(value) => {
            setArraySize(value)
            generateRandomArray()
          }}
          bordered={false}
        />
        <Select
          value={playbackSpeed + "x"}
          options={sortSpeeds}
          onChange={adjustPlaybackSpeed}
          bordered={false}
        />
        <Button type="text" onClick={generateRandomArray}>
          Randomize
        </Button>
      </Row>

      <SortPreview
        numbers={array}
        maxNum={Math.max(...array)}
        groupA={groupA}
        groupB={groupB}
        groupC={groupC}
        groupD={groupD}
        sortedIndices={sortedIndices}
      />

      <Progress
        percent={traceStep > 0 ? (traceStep / (trace.length - 1)) * 100 : 0}
        showInfo={false}
      />

      <Row justify="center">
        <Button
          size="large"
          type="text"
          icon={<StepBackwardOutlined />}
          onClick={stepBackward}
        />
        <Button
          size="large"
          type="text"
          icon={
            timeoutIds.length > 0 ? <PauseOutlined /> : <PlayCircleOutlined />
          }
          onClick={() =>
            timeoutIds.length > 0
              ? pause()
              : traceStep === -1
              ? run(trace)
              : continueSort()
          }
        />
        <Button
          size="large"
          type="text"
          icon={<StepForwardOutlined />}
          onClick={stepForward}
        />
      </Row>
      <SortColorKey {...ALGORITHM_KEY[algorithm]} />
      <SortDescription
        {...ALGORITHM_DESC[algorithm]}
        code={ALGORITHM_CODE[algorithm]}
      />
    </MainLayout>
  )
}

export default SortAlgorithmsPage
