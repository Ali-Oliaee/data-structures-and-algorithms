import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { Segmented } from "antd"

const Codes = () => {
  const [code, setCode] = React.useState("Insert")
  return (
    <>
      <Segmented
        size="large"
        type="primary"
        options={["Insert", "Delete"]}
        onChange={(e) => setCode(e)}
      />
      {code === "Insert" && (
        <>
          <h1 className="code-title">Insert</h1>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`void heapify(int arr[], int n, int i)
{
    // Find parent
    int parent = (i - 1) / 2;
 
    if (arr[parent] > 0) {
        if (arr[i] > arr[parent]) {
            swap(arr[i], arr[parent]);
 
            // Recursively heapify the parent node
            heapify(arr, n, parent);
        }
    }
}
 
void insertNode(int arr[], int& n, int Key)
{
    // Increase the size of Heap by 1
    n = n + 1;
 
    // Insert the element at end of Heap
    arr[n - 1] = Key;
 
    // Heapify the new node following a
    // Bottom-up approach
    heapify(arr, n, n - 1);
}`}
          </SyntaxHighlighter>
        </>
      )}
      {code === "Delete" && (
        <>
          <h1 className="code-title">Delete</h1>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`void heapify(int arr[], int n, int i)
{
    int largest = i; // Initialize largest as root
    int l = 2 * i + 1; // left = 2*i + 1
    int r = 2 * i + 2; // right = 2*i + 2
  
    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
        largest = l;
  
    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
        largest = r;
  
    // If largest is not root
    if (largest != i) {
        swap(arr[i], arr[largest]);
  
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

void deleteRoot(int arr[], int& n)
{
    // Get the last element
    int lastElement = arr[n - 1];

    // Replace root with last element
    arr[0] = lastElement;

    // Decrease size of heap by 1
    n = n - 1;

    // heapify the root node
    heapify(arr, n, 0);
}`}
          </SyntaxHighlighter>
        </>
      )}
    </>
  )
}

export default Codes
