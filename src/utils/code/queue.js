export default [
  {
    title: "DeQueue",
    codes: [
      {
        subtitle: "DeQueue",
        code: `int Queue::DeQueue(){
  if (isEmpty()) {
    cout << "Queue Underflow";
    return 0;
  } else {
    int x = a[++Front];
    return x;
  }
} `,
      },
    ],
  },
  {
    title: "Enqueue",
    codes: [
      {
        subtitle: "Enqueue",
        code: `bool Queue::EnQueue(int x){
  if (isFull()) {
    cout << "Queue Overflow";
    return false;
  } else {
    a[++Rear] = x;
    cout << x << " enqueued to Queue" << endl;
    return true;
  }
} `,
      },
    ],
  },
  {
    title: "isEmpty",
    codes: [
      {
        subtitle: "isEmpty",
        code: `bool Queue::isEmpty(){
  return (Front==Rear);
}`,
      },
    ],
  },
  {
    title: "isFull",
    codes: [
      {
        subtitle: "isFull",
        code: `Bool Queue::isFull(){
  return (Rear==MAX-1);
}`,
      },
    ],
  },
]
