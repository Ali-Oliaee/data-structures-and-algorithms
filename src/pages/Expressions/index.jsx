import React from "react"
import { Button, Input, Image } from "antd"
import MainLayout from "@layouts"
import postfixImage from "@assets/postfix-expression.png"
import prefixImage from "@assets/prefix-expression.png"
import infixImage from "@assets/infix-expression.png"
import "./styles.scss"

const ExpressionConvertorPage = () => {
  const [postExpression, setPostExpression] = React.useState("")
  const [preExpression, setPreExpression] = React.useState("")
  const [postResult, setPostResult] = React.useState("")
  const [preResult, setPreResult] = React.useState("")

  function convertToPostfix() {
    var output = ""
    var stack = []
    for (var i = 0; i < postExpression.length; i++) {
      var ch = postExpression.charAt(i)
      if (ch == "+" || ch == "-" || ch == "*" || ch == "/") {
        while (
          stack.length != 0 &&
          stack[stack.length - 1] != "(" &&
          getPrecedence(ch) <= getPrecedence(stack[stack.length - 1])
        ) {
          output += stack.pop()
          output += " "
        }
        stack.push(ch)
      } else if (ch == "(") stack.push(ch)
      else if (ch == ")") {
        while (stack.length != 0 && stack[stack.length - 1] != "(") {
          output += stack.pop()
          output += " "
        }
        stack.pop()
      } else output += ch
    }
    while (stack.length != 0) {
      output += stack.pop()
      output += " "
    }
    setPostResult(output)
  }
  function getPrecedence(ch) {
    if (ch == "+" || ch == "-") return 1
    else if (ch == "*" || ch == "/") return 2
    else return 0
  }

  function convertToPrefix() {
    var x = preExpression.split("")
    var operands = []
    var numbers = []
    var symbols = ["+", "-", "/", "*", "%"]

    for (var i = 0; i < x.length; i++) {
      if (symbols.includes(x[i])) operands.push(x[i])
      else numbers.push(x[i])
    }
    var final = operands.join(" ") + " " + numbers.join(" ")
    setPreResult(final)
  }

  return (
    <MainLayout>
      <div className="expression-page">
        <h1>Expression Convertor</h1>
        <p>
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
        <div className="images">
          <Image preview={false} width={200} src={infixImage} />
          <Image preview={false} width={200} src={postfixImage} />
          <Image preview={false} width={200} src={prefixImage} />
        </div>
        <Input.Group compact>
          <Input
            placeholder="Enter your expression"
            onChange={(e) => {
              setPostExpression(e.target.value)
              setPreExpression(e.target.value)
            }}
          />
          <Button
            type="primary"
            onClick={() => {
              convertToPostfix()
              convertToPrefix()
            }}
          >
            Evaluate
          </Button>
        </Input.Group>
        <p>Postfix form (output):</p>
        <Input readOnly value={postResult} />
        <p>Prefix form (output):</p>
        <Input readOnly value={preResult} />
      </div>
    </MainLayout>
  )
}

export default ExpressionConvertorPage
