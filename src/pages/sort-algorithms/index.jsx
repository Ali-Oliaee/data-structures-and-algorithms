import "./styles.scss"
import {
  ProgressBar,
  SortColorKey,
  SortControls,
  SortDescription,
  SortPreview,
} from "@/components"
import { useState } from "react"
import MainLayout from "@/layouts"
import { Button, Dropdown, Row } from "antd"
import sortAlgorithms from "@/utils/sort-algorithms"
import { DownOutlined } from "@ant-design/icons"
import arrayLength from "@/utils/array-length"
import { Select } from "antd"
import sortSpeeds from "@/utils/sort-speeds"
import { useEffect } from "react"

const SortAlgorithmsPage = () => {
  const [trace, setTrace] = useState([])
  const [traceStep, setTraceStep] = useState(-1)
  const [originalArray, setOriginalArray] = useState([])
  const [array, setArray] = useState([])
  const [groupA, setGroupA] = useState([])
  const [groupB, setGroupB] = useState([])
  const [groupC, setGroupC] = useState([])
  const [groupD, setGroupD] = useState([])
  const [sortedIndices, setSortedIndices] = useState([])
  const [timeoutIds, setTimeoutIds] = useState([])
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [algorithm, setAlgorithm] = useState("")
  const [sortSpeed, setSortSpeed] = useState("")
  const [arraySize, setArraySize] = useState(0)

  // const componentDidUpdate = (prevProps) => {
  //   if (prevProps.array !== array) {
  //     reset(array)
  //   }
  //   if (prevProps.trace !== trace) {
  //     this.clearTimeouts()
  //     setTrace(trace)
  //   }
  // }

  const reset = (array) => {
    setTrace([])
    setTraceStep(-1)
    setGroupA([])
    setGroupB([])
    setGroupC([])
    setGroupD([])
    setSortedIndices([])
    setOriginalArray([...array])
    setArray(array)
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

  const run = (trace) => {
    const timeoutIds = []
    const timer = 250 / playbackSpeed

    trace.forEach((item, i) => {
      let timeoutId = setTimeout(
        (item) => {
          setTraceStep(traceStep + 1)
          changeVisualState(item)
        },
        i * timer,
        item
      )

      timeoutIds.push(timeoutId)
    })

    // let timeoutId = setTimeout(clearTimeouts, trace.length * timer)
    // timeoutIds.push(timeoutId)
    // setTimeoutIds(timeoutIds)
  }

  const generateRandomArray = () => {
    const getRandomInt = (max) =>
      Math.floor(Math.random() * Math.floor(max)) + 1

    const array = Array.from({ length: arraySize }, () => getRandomInt(100))

    setArray(array)
    setTrace([])
  }

  const pause = () => clearTimeouts()

  useEffect(() => {
    generateRandomArray()
  }, [arraySize])

  // const continueSort = () => {
  //   const trace = this.state.trace.slice(this.state.traceStep)
  //   this.run(trace)
  // }

  // const stepForward = () => {
  //   const trace = this.state.trace
  //   const step = this.state.traceStep
  //   if (step < trace.length - 1) {
  //     const item = trace[step + 1]
  //     this.setState({ traceStep: step + 1 }, this._changeVisualState(item))
  //   }
  // }

  // const stepBackward = () => {
  //   const trace = trace
  //   const step = traceStep
  //   if (step > 0) {
  //     const item = trace[step - 1]
  //     this.setState({ traceStep: step - 1 }, changeVisualState(item))
  //   }
  // }

  // const repeat = () => {
  //   this.clearTimeouts()
  //   this.setState((prevState) => ({
  //     array: [...prevState.originalArray],
  //     traceStep: -1,
  //     comparing: [],
  //     compared: [],
  //     sorted: [],
  //   }))
  //   this.run(this.state.trace)
  // }

  // const adjustPlaybackSpeed = (speed) => {
  //   const playing = this.state.timeoutIds.length > 0
  //   this.pause()
  //   const playbackSpeed = Number(speed.split("x")[0])
  //   this.setState({ playbackSpeed }, () => {
  //     if (playing) this.continueSort()
  //   })
  // }

  return (
    <MainLayout hasOptions>
      <Row justify="end">
        <Select
          options={sortAlgorithms}
          placeholder="Sort Algorithm"
          onChange={setAlgorithm}
          bordered={false}
        />
        <Select
          options={arrayLength}
          placeholder="Array Size"
          onChange={setArraySize}
          bordered={false}
        />
        <Button type="text">Randomize</Button>
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

      <div className="SortVisualizer__ProgressBar">
        <ProgressBar
          width={trace.length > 0 ? (traceStep / (trace.length - 1)) * 100 : 0}
        />
      </div>

      <SortControls
        onPlay={traceStep === -1 ? run(trace) : continueSort()}
        onPause={pause}
        // onForward={this.stepForward.bind(this)}
        // onBackward={this.stepBackward.bind(this)}
        // onRepeat={this.repeat.bind(this)}
        onAdjustSpeed={setSortSpeed}
        playing={timeoutIds.length > 0}
        // playDisabled={
        //   (this.state.traceStep >= this.state.trace.length - 1 &&
        //     this.state.traceStep !== -1) ||
        //   this.state.trace.length <= 0
        // }
        // forwardDisabled={this.state.traceStep >= this.state.trace.length - 1}
        // backwardDisabled={this.state.traceStep <= 0}
        // repeatDisabled={this.state.traceStep <= 0}
        playbackSpeed={sortSpeed}
      />

      <SortColorKey />

      <SortDescription />
    </MainLayout>
  )
}

export default SortAlgorithmsPage
