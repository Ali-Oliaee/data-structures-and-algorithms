import { MaxHeap, useHeap } from "react-tree-vis"
import { Button, Collapse } from "antd"
import MainLayout from "@layouts"
import Codes from "./codes"
import "./styles.scss"
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons"
import { useState } from "react"
import { Input } from "antd"
import { message } from "antd"

const MaxHeapPage = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const { Panel } = Collapse
  const { ref, insert, remove, clear, generateRandomTree, getData } = useHeap()
  const [scale, setScale] = useState(1)
  const [insertValue, setInsertValue] = useState(null)
  const [removeValue, setRemoveValue] = useState(null)
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <MainLayout>
      {contextHolder}
      <div className="max-heap-page">
        <div className="description-container">
          <h1>Max Heap page</h1>
          <p className="description">
            A binary search tree is a rooted binary tree in which the nodes are
            arranged in total order in which the nodes with keys greater than
            any particular node is stored on the right sub-trees and the ones
            with equal to or less than are stored on the left sub-tree
            satisfying the binary search property
          </p>
          <Collapse className="codes-container">
            <Panel header="Codes">
              <Codes />
            </Panel>
          </Collapse>
        </div>
        <div
          className={
            fullscreen ? "heap-container fullscreen" : "heap-container"
          }
        >
          <div className="scale-container">
            <Button
              icon={<ZoomInOutlined />}
              type="text"
              onClick={() => setScale(scale + 0.1)}
            />
            <Button
              icon={<ZoomOutOutlined />}
              type="text"
              onClick={() => setScale(scale - 0.1)}
            />
            <Button
              icon={
                !fullscreen ? (
                  <FullscreenOutlined />
                ) : (
                  <FullscreenExitOutlined />
                )
              }
              type="text"
              onClick={() => setFullscreen(!fullscreen)}
            />
          </div>
          <div
            className={fullscreen ? "fullscreen-heap" : "heap"}
            style={{ zoom: scale }}
          >
            <MaxHeap data={[2, 1, 3]} ref={ref} />
          </div>
          <div className="buttons-container">
            <Input.Group compact>
              <Input
                type="number"
                placeholder="Insert"
                value={insertValue}
                onChange={(e) => {
                  if (e.target.value) setInsertValue(Number(e.target.value))
                  else setInsertValue(null)
                }}
              />
              <Button
                type="primary"
                onClick={() => {
                  insert(insertValue ?? Math.floor(Math.random() * 100))
                  setInsertValue(null)
                }}
              >
                Insert
              </Button>
            </Input.Group>
            <Input.Group compact>
              <Input
                type="number"
                placeholder="Remove"
                value={removeValue}
                onChange={(e) => {
                  if (e.target.value) setRemoveValue(Number(e.target.value))
                  else setRemoveValue(null)
                }}
              />
              <Button
                type="primary"
                onClick={() => {
                  const heapArray = getData()
                  if (removeValue) {
                    if (heapArray.includes(removeValue)) {
                      remove(removeValue)
                      messageApi.success("Value removed successfully")
                    } else messageApi.error("Value not found")
                  } else messageApi.error("Enter a value to remove")

                  setRemoveValue(null)
                }}
              >
                Remove
              </Button>
            </Input.Group>
            <Button
              className="clear-button"
              type="primary"
              onClick={() => clear()}
            >
              Clear
            </Button>
            <Button
              className="random-button"
              type="primary"
              onClick={() =>
                generateRandomTree(Math.floor(Math.random() * 10) + 1)
              }
            >
              Random
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default MaxHeapPage
