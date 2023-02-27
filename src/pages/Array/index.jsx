import { useState } from "react"
import { Button, Input, message } from "antd"
import MainLayout from "@layouts"
import { CodeWrapper } from "../../components"
import codes from "@utils/code/array"
import "./styles.scss"

const ArrayPage = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [arr, setArr] = useState([1, 2, 3, 4, 5])
  const [insertValue, setInsertValue] = useState(null)
  const [deleteValue, setDeleteValue] = useState(null)

  const createRandomArray = () => {
    setArr([])
    for (let i = 0; i < 8; i++) {
      let random = Math.floor(Math.random() * 100)
      setArr((prev) => [...prev, random])
    }
  }

  return (
    <MainLayout>
      {contextHolder}
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
                  value={deleteValue}
                  type="number"
                  placeholder="value"
                  className="input"
                  onChange={(text) => setDeleteValue(text.target.value)}
                />
                <Button
                  type="primary"
                  className="button"
                  onClick={() => {
                    if (arr.length === 8)
                      return messageApi.error("Array is Full!")
                    setArr((prev) => [
                      ...prev,
                      deleteValue ?? Math.floor(Math.random() * 100),
                    ])
                    setDeleteValue(null)
                  }}
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
                  value={insertValue}
                  onChange={(text) => setInsertValue(text.target.value)}
                />
                <Button
                  type="primary"
                  className="button"
                  onClick={() => {
                    if (arr.length === 8)
                      return messageApi.error("Array is Full!")
                    setArr((prev) => [
                      insertValue ?? Math.floor(Math.random() * 100),
                      ...prev,
                    ])
                    setInsertValue(null)
                  }}
                >
                  Insert at Start
                </Button>
              </Input.Group>
            </div>
            <div className="option">
              <Button
                type="primary"
                className="button"
                onClick={() => {
                  if (arr.length === 0)
                    return messageApi.error("Array is Empty!")
                  setArr((prev) => prev.slice(0, prev.length - 1))
                }}
              >
                Delete at End
              </Button>
            </div>
            <div className="option">
              <Button
                type="primary"
                className="button"
                onClick={() => {
                  if (arr.length === 0)
                    return messageApi.error("Array is Empty!")
                  setArr((prev) => prev.slice(1, prev.length))
                }}
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
