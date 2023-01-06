import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { Segmented } from "antd"

const Codes = () => {
  const [code, setCode] = React.useState("Pop")
  return (
    <>
      <Segmented
        size="large"
        type="primary"
        options={["Pop", "Push", "IsEmpty", "IsFull", "Peek"]}
        onChange={(e) => setCode(e)}
      />
      {code === "Pop" && (
        <>
          <h1 className="code-title">POP</h1>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`
int pop(int item){
    if isEmpty()) {
        item = stack[top];
        top = top - 1;
        return item;
    }
    else cout << “stack if empty”;
    
}`}
          </SyntaxHighlighter>
        </>
      )}
      {code === "Push" && (
        <>
          <h1 className="code-title">Push</h1>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`
void push(int item){
    if(!isFull ()) {    
        top = top + 1;
        stack[top] = item;
    }
    else cout << “stack is full”;
}`}
          </SyntaxHighlighter>
        </>
      )}
      {code === "IsEmpty" && (
        <>
          <h1 className="code-title">Is Empty</h1>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`
int pop(int item){
   if isEmpty()) {
       item = stack[top];
       top = top - 1;
       return item;
   }
   else cout << “stack if empty”;
   
}`}
          </SyntaxHighlighter>
        </>
      )}
      {code === "IsFull" && (
        <>
          <h1 className="code-title">Is Full</h1>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`
void push(int item){
   if(!isFull ()) {    
       top = top + 1;
       stack[top] = item;
   }
   else cout << “stack is full”;
}`}
          </SyntaxHighlighter>
        </>
      )}
      {code === "Peek" && (
        <>
          <h1 className="code-title">Peek</h1>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`
void push(int item){
   if(!isFull ()) {    
       top = top + 1;
       stack[top] = item;
   }
   else cout << “stack is full”;
}`}
          </SyntaxHighlighter>
        </>
      )}
    </>
  )
}

export default Codes
