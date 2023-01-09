import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { Segmented } from "antd"

const Codes = () => {
  const [code, setCode] = React.useState("Enqueue")
  return (
    <>
      <Segmented
        size="large"
        type="primary"
        options={["Enqueue", "Dequeue"]}
        onChange={(e) => setCode(e)}
      />
      {code === "Enqueue" && (
        <>
          <h1 className="code-title">Enqueue</h1>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`#include<iostream>
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
      )}
      {code === "Dequeue" && (
        <>
          <h1 className="code-title">Dequeue</h1>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`#include<iostream>
using namespace std;
int main()
{
    int arr[10], tot=10, i, elem, j, found=0;
    cout<<"Enter 10 Array Elements: ";
    for(i=0; i<tot; i++)
        cin>>arr[i];
    cout<<"\nEnter Element to Delete: ";
    cin>>elem;
    for(i=0; i<tot; i++)
    {
        if(arr[i]==elem)
        {
            for(j=i; j<(tot-1); j++)
                arr[j] = arr[j+1];
            found++;
            i--;
            tot--;
        }
    }
    if(found==0)
        cout<<"\nElement doesn't found in the Array!";
    else
        cout<<"\nElement Deleted Successfully!";
    cout<<endl;
    return 0;
}`}
          </SyntaxHighlighter>
        </>
      )}
    </>
  )
}

export default Codes
