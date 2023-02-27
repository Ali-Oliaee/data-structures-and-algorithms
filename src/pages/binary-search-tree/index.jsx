import { useState } from "react"
import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis"
import { Button, message, Input, Select } from "antd"
import MainLayout from "@layouts"
import { CodeWrapper } from "@/components"
import code from "@utils/code/binary-search-tree"
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons"
import "./styles.scss"

const BSTPage = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const {
    ref,
    insert,
    remove,
    search,
    clear,
    generateRandomTree,
    getData,
    checkTreeType,
  } = useBinarySearchTree()
  const [scale, setScale] = useState(1)
  const [insertValue, setInsertValue] = useState(null)
  const [removeValue, setRemoveValue] = useState(null)
  const [searchValue, setSearchValue] = useState(null)
  const [fullscreen, setFullscreen] = useState(false)
  const [travelType, setTravelType] = useState("inorder")
  const [traverse, setTraverse] = useState([])
  const [treeType, setTreeType] = useState([])

  return (
    <MainLayout>
      {contextHolder}
      <div className="bst-page">
        <div className="description-container">
          <h1>Binary Search Tree (BST)</h1>
          <p className="description">
            A binary search tree is a rooted binary tree in which the nodes are
            arranged in total order in which the nodes with keys greater than
            any particular node is stored on the right sub-trees and the ones
            with equal to or less than are stored on the left sub-tree
            satisfying the binary search property
          </p>
        </div>
        <div
          className={
            fullscreen ? "tree-container fullscreen" : "tree-container"
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
          <div className="buttons-container">
            <div className="tree-traverse">
              <Button
                className="traverse-button"
                type="primary"
                onClick={() => setTreeType(checkTreeType())}
              >
                Tree type
              </Button>
              <h3>
                {treeType &&
                  treeType.map((item, i) =>
                    i === treeType.length - 1 ? ` ${item}` : ` ${item},`
                  )}
              </h3>
            </div>
            <div className="tree-traverse">
              <Input.Group compact>
                <Select defaultValue="inorder" onChange={setTravelType}>
                  <Select.Option value="inorder">Inorder</Select.Option>
                  <Select.Option value="preorder">Preorder</Select.Option>
                  <Select.Option value="postorder">Postorder</Select.Option>
                </Select>
                <Button
                  className="traverse-button"
                  type="primary"
                  onClick={() => setTraverse(getData(travelType))}
                >
                  Traverse
                </Button>
              </Input.Group>
              <h3>[{traverse && traverse.map((item) => ` ${item} `)}]</h3>
            </div>
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
                  const treeArray = getData("inorder")
                  if (removeValue) {
                    if (treeArray.includes(removeValue)) {
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
            <Input.Group compact>
              <Input
                type="number"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => {
                  if (e.target.value) setSearchValue(Number(e.target.value))
                  else setSearchValue(null)
                }}
              />
              <Button
                type="primary"
                onClick={() => {
                  const treeArray = getData("inorder")
                  if (searchValue) {
                    if (treeArray.includes(searchValue)) {
                      search(searchValue)
                      messageApi.success("Value find successfully")
                    } else messageApi.error("Value not found")
                  } else messageApi.error("Enter a value to search")
                  setSearchValue(null)
                }}
              >
                Search
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
          <div
            className={fullscreen ? "fullscreen-tree" : "tree"}
            style={{ zoom: scale }}
          >
            <BinarySearchTree data={[2, 1, 3]} ref={ref} />
          </div>
        </div>
        <CodeWrapper data={code} />
      </div>
    </MainLayout>
  )
}

export default BSTPage
