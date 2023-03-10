import { DataStructureCard } from "@/components"
import { useCallback } from "react"
import array from "@assets/array.png"
import stack from "@assets/stack.png"
import queue from "@assets/queue.png"
import bst from "@assets/bst.png"
import sort from "@assets/sort.png"
import postfix from "@assets/postfix-expression.png"
import ext from "@assets/ext.png"
import maxHeap from "@assets/max-heap.png"
import minHeap from "@assets/min-heap.png"
import Particles from "react-particles"
import options from "@utils/particle-config"
import { loadFull } from "tsparticles"
import "./styles.scss"

const HomePage = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <div className="home-page">
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <h2 className="title">Data Structures & Algorithms</h2>
      <div className="card-container">
        <DataStructureCard
          title="Sorting Algorithms"
          description="Sorting is the process of arranging a collection of items in a
          particular order. Sorting algorithms are used to arrange data in a
          particular format."
          image={sort}
          link="/sort"
        />
        <DataStructureCard
          title="Array"
          description=" An array is a collection of elements of the same type placed in
          contiguous memory locations that can be individually referenced by
          using an index to a unique identifier."
          image={array}
          link="/array"
        />
        <DataStructureCard
          title="Stack"
          description="Stacks in Data Structures is a linear type of data structure that
            follows the LIFO (Last-In-First-Out)"
          image={stack}
          link="/stack"
        />

        <DataStructureCard
          title="Queue"
          description="A queue is a linear structure which follows a particular order in
          which the operations are performed. The order is First In First Out
          (FIFO)."
          image={queue}
          link="/queue"
        />

        <DataStructureCard
          title="Binary Search Tree"
          description="A binary search tree is a binary tree in which the value of each
          internal node is greater than or equal to all the values in the nodes
          in that node's left subtree and less than or equal to those in its
          right subtree."
          image={bst}
          link="/bst"
        />
        <DataStructureCard
          title="Expressions"
          description="An expression is a combination of one or more constants, variables,
          operators, and the function calls that evaluates to a single value."
          image={postfix}
          link="/expressions"
        />
        <DataStructureCard
          title="Expression Tree"
          description="An expression tree is a binary tree in which each internal node
          corresponds to an operator and each leaf node corresponds to an
          operand."
          image={ext}
          link="/ext"
        />
        <DataStructureCard
          title="Min Heap"
          description="A min heap is a complete binary tree in which the value in each
          internal node is smaller than or equal to the values in the children
          of that node."
          image={minHeap}
          link="/min-heap"
        />
        <DataStructureCard
          title="Max Heap"
          description="A max heap is a complete binary tree in which the value in each
          internal node is greater than or equal to the values in the children
          of that node."
          image={maxHeap}
          link="/max-heap"
        />
      </div>
      <h3 className="copyright-link">
        Made by{" "}
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          Vite
        </a>{" "}
        and{" "}
        <a href="https://ant.design/" target="_blank" rel="noopener noreferrer">
          Ant Design
        </a>
      </h3>
    </div>
  )
}

export default HomePage
