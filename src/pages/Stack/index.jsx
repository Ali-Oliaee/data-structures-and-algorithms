import { useState } from "react"
import { Button, message } from "antd"
import { CodeWrapper } from "@/components"
import MainLayout from "@layouts"
import codes from "@utils/code/array"
import "./styles.scss"

const StackPage = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [stack, setStack] = useState([2, 3])
  const [isEmpty, setIsEmpty] = useState(null)
  const [isFull, setIsFull] = useState(null)
  const [peek, setPeek] = useState(null)

  const pop = () => {
    if (stack.length === 0) return messageApi.error("Stack is empty")
    setIsEmpty(null)
    setIsFull(null)
    setPeek(null)
    setStack(stack.slice(0, stack.length - 1))
  }

  const push = () => {
    if (stack.length === 5) return messageApi.error("Stack is full")
    setIsEmpty(null)
    setIsFull(null)
    setPeek(null)
    const random = Math.floor(Math.random() * 100)
    setStack([...stack, random])
  }

  return (
    <MainLayout>
      {contextHolder}
      <h1 className="title">Stack</h1>
      <div className="stack-page">
        <div className="stack-descriptions">
          <p>
            Stacks in Data Structures is a linear type of data structure that
            follows the LIFO (Last-In-First-Out) principle and allows insertion
            and deletion operations from one end of the stack data structure,
            that is top. Implementation of the stack can be done by contiguous
            memory which is an array, and non-contiguous memory which is a
            linked list. Stack plays a vital role in many applications.
          </p>
          <CodeWrapper data={codes} />
        </div>
        <div className="stack">
          <div className="stack-container">
            {stack.map((item, index) => (
              <div className="stack-item" key={index}>
                {item}
              </div>
            ))}
            <h4 className="stack-size">Stack size: 5</h4>
          </div>
          <div className="buttons">
            <Button className="button" type="primary" onClick={pop}>
              Pop
            </Button>
            <Button className="button" type="primary" onClick={push}>
              Push
            </Button>
            <div className="button-container">
              <Button
                className="button"
                type="primary"
                onClick={() => {
                  setIsFull(null)
                  setPeek(null)
                  setIsEmpty(stack.length === 0 ? true : false)
                }}
              >
                isEmpty
              </Button>
              <h4>{isEmpty !== null && String(isEmpty)}</h4>
            </div>
            <div className="button-container">
              <Button
                className="button"
                type="primary"
                onClick={() => {
                  setIsEmpty(null)
                  setPeek(null)
                  setIsFull(stack.length === 5 ? true : false)
                }}
              >
                IsFull
              </Button>
              <h4>{isFull !== null && String(isFull)}</h4>
            </div>
            <div className="button-container">
              <Button
                className="button"
                type="primary"
                onClick={() => {
                  setIsEmpty(null)
                  setIsFull(null)
                  setPeek(stack[0])
                }}
              >
                Peek
              </Button>
              <h4>{peek}</h4>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default StackPage
