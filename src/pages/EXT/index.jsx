import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis"
import { Button, Collapse } from "antd"
import MainLayout from "../../layout"
import Codes from "./codes"
import "./styles.scss"
import InfixToPostfix from "./inToPost"

const EXTPage = () => {
  const { Panel } = Collapse
  const { ref, insert, remove, search, clear, generateRandomTree } =
    useBinarySearchTree()
  return (
    <MainLayout>
      <h1>Binary Expression Tree</h1>
      <p>
        The leaves of a binary expression tree are operands, such as constants
        or variable names, and the other nodes contain operators. These
        particular trees happen to be binary, because all of the operations are
        binary, and although this is the simplest case, it is possible for nodes
        to have more than two children. It is also possible for a node to have
        only one child, as is the case with the unary minus operator. An
        expression tree, T, can be evaluated by applying the operator at the
        root to the values obtained by recursively evaluating the left and right
        subtrees.
      </p>
      <InfixToPostfix />
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
      <Button type="primary" onClick={() => search(3)}>
        Search
      </Button>

      <BinarySearchTree data={[2, 1, 3]} ref={ref} />
    </MainLayout>
  )
}

export default EXTPage
