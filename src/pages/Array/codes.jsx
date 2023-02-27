import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { Segmented } from "antd"

const Codes = () => {
  const [code, setCode] = React.useState("insert")
  return (
    <>
      <Segmented
        size="large"
        type="primary"
        options={["Insert", "Delete", "Sort"]}
      />
      <SyntaxHighlighter language="cpp" style={tomorrow}>
        {code === "insert" &&
          `#include<iostream>
          using namespace std;
          int main()
          {
              int arr[6], i, elem;
              cout<<"Enter 5 Array Elements: ";
              for(i=0; i<5; i++)
                  cin>>arr[i];
              cout<<"\nEnter Element to Insert: ";
              cin>>elem;
              arr[i] = elem;
              cout<<"\nThe New Array is:\n";
              for(i=0; i<6; i++)
                  cout<<arr[i]<<"  ";
              cout<<endl;
              return 0;
          }`}
      </SyntaxHighlighter>
    </>
  )
}

export default Codes
