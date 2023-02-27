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

const MaxHeapPage = () => {
  const { Panel } = Collapse
  const { ref, insert, remove, clear, generateRandomTree } = useHeap()
  const [scale, setScale] = useState(1)
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <MainLayout>
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
            <Button
              type="primary"
              onClick={() => insert(Math.floor(Math.random() * 100))}
            >
              Insert
            </Button>
            <Button type="primary" onClick={() => remove(3)}>
              Remove
            </Button>
            <Button type="primary" onClick={() => clear()}>
              Clear
            </Button>
            <Button
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
