import { MinHeap, useHeap } from "react-tree-vis"
import { Button, Collapse } from "antd"
import MainLayout from "@layouts"
import Codes from "./codes"
import "./styles.scss"

const MinHeapPage = () => {
  const { Panel } = Collapse
  const { ref, insert, remove, clear, generateRandomTree } = useHeap()
  return (
    <MainLayout>
      <h1>Min Heap page</h1>
      <p>
        A binary search tree is a rooted binary tree in which the nodes are
        arranged in total order in which the nodes with keys greater than any
        particular node is stored on the right sub-trees and the ones with equal
        to or less than are stored on the left sub-tree satisfying the binary
        search property
      </p>
      <Collapse className="codes-container">
        <Panel header="Codes">
          <Codes />
        </Panel>
      </Collapse>
      <Button
        type="primary"
        onClick={() => insert(Math.floor(Math.random() * 100))}
      >
        Insert
      </Button>
      <br />
      <Button type="primary" onClick={() => remove(3)}>
        Remove
      </Button>
      <br />
      <Button type="primary" onClick={() => clear()}>
        Clear
      </Button>
      <br />
      <Button
        type="primary"
        onClick={() => generateRandomTree(Math.floor(Math.random() * 10) + 1)}
      >
        Random
      </Button>
      <br />
      <MinHeap data={[2, 1, 3]} ref={ref} />
    </MainLayout>
  )
}

export default MinHeapPage
