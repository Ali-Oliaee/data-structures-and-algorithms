import Node from "./Node"

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value)
  }

  insert(value) {
    var node = new Node(value)
    if (this.root == null || this.root.value == null) {
      console.log("Root is null")
      this.root = node
    }

    var current = this.root
    while (current) {
      if (current.value === value) return
      else if (value < current.value) {
        if (current.children[0] == null || current.children[0].value == "e") {
          current.children[0] = node
          if (current.children[1] == null) current.children[1] = new Node("e")
          return
        }
        current = current.children[0]
      } else {
        if (current.children[1] == null || current.children[1].value == "e") {
          if (!current.children[0]) current.children[0] = new Node("e")
          current.children[1] = node
          return
        }
        current = current.children[1]
      }
    }
  }
}

export default BinarySearchTree
