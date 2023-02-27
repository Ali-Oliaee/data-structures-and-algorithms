export default [
  {
    title: "Pop",
    codes: [
      {
        subtitle: "Pop",
        code: `int pop(){
    if(top == -1)
        cout<<"Stack is Empty!"<<endl;
    else top--;
    return arr[top+1];
}`,
      },
    ],
  },
  {
    title: "Push",
    codes: [
      {
        subtitle: "Push",
        code: `void push(int x){
    if(top == size-1)
        cout<<"Stack Overflow!"<<endl;
    else{
        top++;
        arr[top] = x;
    }
}`,
      },
    ],
  },
  {
    title: "isEmpty",
    codes: [
      {
        subtitle: "isEmpty",
        code: `bool isEmpty(){
  if(top == -1)
    return true;
  return false;
}`,
      },
    ],
  },
  {
    title: "isFull",
    codes: [
      {
        subtitle: "isFull",
        code: `bool isFull(){
  if(top == size-1)
    return true;
  return false;
}`,
      },
    ],
  },
  {
    title: "Peek",
    codes: [
      {
        subtitle: "Peek",
        code: `int peek(){
  if(top == -1)
    cout<<"Stack is Empty!"<<endl;
  else
    return arr[top];
}`,
      },
    ],
  },
]
