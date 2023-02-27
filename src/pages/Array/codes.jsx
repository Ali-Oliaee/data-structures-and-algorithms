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
        onChange={(e) => setCode(e)}
      />
      {code === "Insert" && (
        <>
          <h1 className="code-title">Insert At First</h1>
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
          <h1 className="code-title">Insert At Last</h1>
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
          <h1 className="code-title">Insert At Specific Position</h1>
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
      {code === "Delete" && (
        <>
          <h1 className="code-title">Delete from First</h1>
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
          <h1 className="code-title">Delete from Last</h1>
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
          <h1 className="code-title">Delete from Specific Position</h1>
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
      {code === "Sort" && (
        <>
          <h1 className="code-title">Bubble sort</h1>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`#include<iostream>    
using namespace std;    
    void print(int a[], int n) //function to print array elements  
    {  
    int i;  
    for(i = 0; i < n; i++)    
    {    
       cout<<a[i]<<" ";     
    }        
    }  
 void bubble(int a[], int n) // function to implement bubble sort  
 {  
 int i, j, temp;  
   for(i = 0; i < n; i++)    
    {    
      for(j = i+1; j < n; j++)    
        {    
            if(a[j] < a[i])    
            {    
                temp = a[i];    
                a[i] = a[j];    
                a[j] = temp;     
            }     
        }     
    }     
    
 }  
int main()    
{    
    int i, j,temp;     
    int a[5] = {45, 1, 32, 13, 26};     
    int n = sizeof(a)/sizeof(a[0]);   
    cout<<"Before sorting array elements are - \n";  
    print(a, n);  
    bubble(a, n);  
    cout<<"\nAfter sorting array elements are - \n";    
    print(a, n);  
return 0;  
}`}
          </SyntaxHighlighter>
        </>
      )}
    </>
  )
}

export default Codes
