import { Button, Collapse } from "antd"
import React from "react"
import MainLayout from "@layouts"
import Codes from "./codes"
import "./styles.scss"

const StackPage = () => {
  const { Panel } = Collapse
  const [stack, setStack] = React.useState([2, 3])
  const [isEmpty, setIsEmpty] = React.useState("")
  const [isFull, setIsFull] = React.useState("")
  const [peek, setPeek] = React.useState(null)

  const pop = () => {
    setIsEmpty("")
    setIsFull("")
    setPeek(null)
    const newStack = [...stack]
    newStack.shift()
    setStack(newStack)
  }

  const push = () => {
    setIsEmpty("")
    setIsFull("")
    setPeek(null)
    const newStack = [...stack]
    const random = Math.floor(Math.random() * 100)
    if (stack.length < 5) newStack.unshift(random)
    setStack(newStack)
  }

  return (
    <MainLayout>
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
          <Collapse className="codes-container">
            <Panel header="Codes">
              <Codes />
            </Panel>
          </Collapse>
        </div>
        <div className="stack">
          <div className="stack-container">
            {stack.reverse().map((item, index) => (
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
                  setIsFull("")
                  setPeek(null)
                  setIsEmpty(stack.length === 0 ? "true" : "false")
                }}
              >
                isEmpty
              </Button>
              <h4>{isEmpty}</h4>
            </div>
            <div className="button-container">
              <Button
                className="button"
                type="primary"
                onClick={() => {
                  setIsEmpty("")
                  setPeek(null)
                  setIsFull(stack.length === 5 ? "true" : "false")
                }}
              >
                IsFull
              </Button>
              <h4>{isFull}</h4>
            </div>
            <div className="button-container">
              <Button
                className="button"
                type="primary"
                onClick={() => {
                  setIsEmpty("")
                  setIsFull("")
                  setPeek(stack.length > 0 && stack[0])
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
