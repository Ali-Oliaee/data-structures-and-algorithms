import { useState } from "react"
import { Button, Collapse } from "antd"
import ArraySidebar from "./sidebar"
import MainLayout from "../../layout"
import "./styles.scss"
import Codes from "./codes"

const ArrayPage = () => {
  const { Panel } = Collapse
  const [arr, setArr] = useState([1, 2, 3, 4, 5])
  const [index, setIndex] = useState(null)
  const [value, setValue] = useState(null)
  const [length, setLength] = useState(10)

  const createRandomArray = () => {
    setArr([])
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * 100)
      setArr((prev) => [...prev, random])
    }
  }

  const insertAfterIndex = () => {
    if (index === null || value === null) {
      alert("Please enter index and value")
      return
    }
    if (index >= arr.length || index < 0) {
      alert("Index out of range")
      return
    }
    setArr((prev) => [
      ...arr.slice(0, Number(index) + 1),
      Number(value),
      ...prev.slice(Number(index) + 1),
    ])
  }

  return (
    <MainLayout sidebar={<ArraySidebar />}>
      <div className="array-page">
        <h1 className="title">Array</h1>
        <div className="array-container">
          {arr.map((item, index) => (
            <div className="item" key={index}>
              <span className="value">{item}</span>
              <span className="index">{index}</span>
            </div>
          ))}
        </div>
        <div className="description-container">
          <h4 className="length">Array Length: {arr.length}</h4>
          An array is a collection of elements of the same type placed in
          contiguous memory locations that can be individually referenced by
          using an index to a unique identifier. Five values of type int can be
          declared as an array without having to declare five different
          variables (each with its own identifier).
        </div>
        <Collapse className="codes-container">
          <Panel header="Codes">
            <Codes />
          </Panel>
        </Collapse>
        {/* <Button type="primary" onClick={createRandomArray}>
          Create Random Array
        </Button>
        <input
          type="number"
          placeholder="value"
          onChange={(text) => setValue(text.target.value)}
        />
        <Button
          type="primary"
          onClick={() => setArr((prev) => [...prev, value])}
        >
          Insert at End
        </Button>
        <input
          type="number"
          placeholder="value"
          onChange={(text) => setValue(text.target.value)}
        />
        <Button
          type="primary"
          onClick={() => setArr((prev) => [value, ...prev])}
        >
          Insert at Start
        </Button>
        <input
          type="number"
          placeholder="index"
          onChange={(text) => setIndex(text.target.value)}
        />
        <input
          type="number"
          placeholder="value"
          onChange={(text) => setValue(text.target.value)}
        />
        <Button type="primary" onClick={insertAfterIndex}>
          Insert After Index
        </Button>
        <Button
          type="primary"
          onClick={() => setArr((prev) => prev.slice(0, prev.length - 1))}
        >
          Delete at End
        </Button>
        <Button
          type="primary"
          onClick={() => setArr((prev) => prev.slice(1, prev.length))}
        >
          Delete at Start
        </Button>
        <Button
          type="primary"
          onClick={() => setArr([...arr.sort((a, b) => a - b)])}
        >
          sort
        </Button> */}
      </div>
    </MainLayout>
  )
}

export default ArrayPage
