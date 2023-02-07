import { Button, Input } from "antd"
import MainLayout from "@layouts"
import { CodeWrapper } from "@/components"
import "./styles.scss"

const EXTPage = () => {
  var currentToken
  var lastOperand
  class Node {
    constructor(value) {
      this.value = value
      this.left = undefined
      this.right = undefined
      this.parent = undefined
    }
  }
  class ExpTree {
    constructor(symbols) {
      lastOperand = false
      this.add(symbols)
    }
    add(n) {
      currentToken = getToken(n)
      var newbie = new Node(currentToken)
      if (!this.root) {
        this.root = newbie
        currentToken = getToken(n)
        walk(this.root)
      }
      function walk(node) {
        if (currentToken) {
          var newbie = new Node(currentToken)
          if (lastOperand === false) {
            node.left = newbie
            node.left.parent = node
            lastOperand = /^[a-z0-9]+$/i.test(currentToken)
            currentToken = getToken(n)
            walk(node.left)
          } else {
            if (!node.parent.right) {
              node.parent.right = newbie
              node.parent.right.parent = node.parent
              lastOperand = /^[a-z0-9]+$/i.test(currentToken)
              currentToken = getToken(n)
              walk(node.parent.right)
            } else {
              walk(node.parent)
            }
          }
        } else {
          return
        }
      }
      function getToken(arr) {
        return arr.shift()
      }
    }
    draw(el) {
      function walk(el, node) {
        var nodeEl = document.createElement("div")
        var nodeCir = document.createElement("div")
        nodeCir.className = "node"
        var valueEl = document.createTextNode(node.value)
        var childrenEl = document.createElement("div")
        childrenEl.className = "children"
        nodeCir.appendChild(valueEl)
        nodeEl.appendChild(nodeCir)
        nodeEl.appendChild(childrenEl)
        el.appendChild(nodeEl)
        if (node.left) walk(childrenEl, node.left)
        if (node.right) walk(childrenEl, node.right)
      }
      walk(el, this.root)
    }
  }

  String.prototype.allReplace = function (obj) {
    var retStr = this
    for (var x in obj) {
      retStr = retStr.replace(new RegExp(x, "g"), obj[x])
    }
    return retStr
  }

  function ReverseInfix(infx) {
    var str = infx
      .replace(/\*/g, " * ")
      .replace(/\//g, " / ")
      .replace(/\+/g, " + ")
      .replace(/\-/g, " - ")
      .replace(/\(/g, " ( ")
      .replace(/\)/g, " ) ")
    var infixArray = str.trim().split(/\s+/g)
    var reverseArray = infixArray.reverse()
    return reverseArray
  }

  function OperatorHierarchy(op1, op2) {
    var h1, h2
    switch (op1) {
      case "/":
      case "*":
        h1 = 2
        break
      default:
        h1 = 1
    }
    switch (op2) {
      case "/":
      case "*":
        h2 = 2
        break
      default:
        h2 = 1
    }
    return h1 > h2
  }

  function InfixToPrefix(infx) {
    var RIS = []
    var RPS = []
    var S = []
    RIS = ReverseInfix(infx)
    RIS.forEach(function (ch) {
      var operatorScanned = !/^[a-z0-9]+$/i.test(ch)
      var isOperand = /^[a-z0-9]+$/i.test(ch)
      if (isOperand) {
        RPS.push(ch)
      } else if (ch == ")") {
        S.push(ch)
      } else if (ch == "(") {
        for (var i = S.length - 1; i >= 0; i--) {
          if (S[i] != ")") {
            RPS.push(S.pop())
          } else {
            S.pop()
            return
          }
        }
      } else {
        for (
          var j = S.length - 1;
          j >= 0 && S[j] != ")" && OperatorHierarchy(S[j], ch);
          j--
        ) {
          RPS.push(S.pop())
        }
        S.push(ch)
      }
    })
    for (var m = S.length - 1; m >= 0; m--) {
      RPS.push(S.pop())
    }
    return RPS
  }

  function Evaluate() {
    var infix = document.getElementById("Entry").value
    if (infix) {
      var reversePrefix = InfixToPrefix(infix)
      var prefix = reversePrefix.reverse()

      const et = new ExpTree(prefix)
      var treeContent = document.getElementById("Tree")
      treeContent.innerHTML = ""
      et.draw(treeContent)
      document.querySelector(".controls-wrapper").className = "controls-wrapper"
    } else {
      document.querySelector(".controls-wrapper").className += " error"
      var treeContent = document.getElementById("Tree")
      treeContent.innerHTML = ""
    }
  }

  return (
    <MainLayout>
      <div className="ext-page">
        <h1>Expression Tree </h1>
        <p className="description">
          Based on the operator position, expressions are divided into THREE
          types. They are as follows... Infix Expression Postfix Expression
          Prefix Expression Infix Expression In infix expression, operator is
          used in between the operands. The general structure of an Infix
          expression is as follows... Postfix Expression In postfix expression,
          operator is used after operands. We can say that "Operator follows the
          Operands". The general structure of Postfix expression is as
          follows...Prefix Expression In prefix expression, operator is used
          before operands. We can say that "Operands follows the Operator". The
          general structure of Prefix expression is as follows...
        </p>
        <Input.Group compact size="large">
          <Input
            id="Entry"
            className="input"
            placeholder="Enter an expression"
          />
          <Button id="Evaluate" type="primary" onClick={Evaluate} size="large">
            Create
          </Button>
        </Input.Group>
        <div id="Tree" />
        {/* <CodeWrapper data={codes} /> */}
      </div>
    </MainLayout>
  )
}

export default EXTPage
