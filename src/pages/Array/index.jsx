import { useState } from "react"
import { Button, Input } from "antd"
import MainLayout from "../../layout"
import { CodeWrapper } from "../../components"
import codes from "../../utils/code/array"
import "./styles.scss"

const ArrayPage = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5])
  const [index, setIndex] = useState(null)
  const [value, setValue] = useState(null)

  const createRandomArray = () => {
    setArr([])
    for (let i = 0; i < 10; i++) {
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
    <MainLayout>
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
          <h4 className="length">Length: {arr.length}</h4>
          An array is a collection of elements of the same type placed in
          contiguous memory locations that can be individually referenced by
          using an index to a unique identifier. Five values of type int can be
          declared as an array without having to declare five different
          variables (each with its own identifier).
        </div>
        <div className="info">
          <CodeWrapper data={codes} />
          <div className="options">
            <div className="option">
              <Button
                type="primary"
                className="button"
                onClick={createRandomArray}
              >
                Create Random Array
              </Button>
            </div>
            <div className="option">
              <Input.Group compact>
                <Input
                  type="number"
                  placeholder="value"
                  className="input"
                  onChange={(text) => setValue(text.target.value)}
                />
                <Button
                  type="primary"
                  className="button"
                  onClick={() => setArr((prev) => [...prev, value])}
                >
                  Insert at End
                </Button>
              </Input.Group>
            </div>
            <div className="option">
              <Input.Group compact>
                <Input
                  type="number"
                  className="input"
                  placeholder="value"
                  onChange={(text) => setValue(text.target.value)}
                />
                <Button
                  type="primary"
                  className="button"
                  onClick={() => setArr((prev) => [value, ...prev])}
                >
                  Insert at Start
                </Button>
              </Input.Group>
            </div>
            <div className="option">
              <Input.Group compact>
                <Input
                  type="number"
                  className="input"
                  placeholder="index"
                  onChange={(text) => setIndex(text.target.value)}
                />
                <Input
                  type="number"
                  className="input"
                  placeholder="value"
                  onChange={(text) => setValue(text.target.value)}
                />
                <Button
                  type="primary"
                  className="button"
                  onClick={insertAfterIndex}
                >
                  Insert After Index
                </Button>
              </Input.Group>
            </div>
            <div className="option">
              <Button
                type="primary"
                className="button"
                onClick={() => setArr((prev) => prev.slice(0, prev.length - 1))}
              >
                Delete at End
              </Button>
            </div>
            <div className="option">
              <Button
                type="primary"
                className="button"
                onClick={() => setArr((prev) => prev.slice(1, prev.length))}
              >
                Delete at Start
              </Button>
            </div>
            <div className="option">
              <Button
                type="primary"
                className="button"
                onClick={() => setArr([...arr.sort((a, b) => a - b)])}
              >
                Sort Ascending
              </Button>
            </div>
            <div className="option">
              <Button
                type="primary"
                className="button"
                onClick={() => setArr([...arr.sort((a, b) => b - a)])}
              >
                Sort Descending
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ArrayPage
