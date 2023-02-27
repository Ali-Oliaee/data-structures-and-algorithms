export default [
  {
    title: "Insert",
    codes: [
      {
        subtitle: "Insert",
        code: `int insertX(int n, int arr[], int x, int pos){
  // increase the size by 1
  n++;

  // shift elements forward
  for (int i = n; i >= pos; i--)
    arr[i] = arr[i - 1];

  // insert x at pos
  arr[pos - 1] = x;

  return arr;
}`,
      },
    ],
  },
  {
    title: "Delete",
    codes: [
      {
        subtitle: "Delete",
        code: `int deleteElement(int arr[], int n, int x) {
  // Search x in array
  int i;
  for (i=0; i<n; i++)
    if (arr[i] == x)
      break;
    
  // If x found in array
  if (i < n){
      // reduce size of array and move all
      // elements on space ahead
      n = n - 1;
      for (int j=i; j<n; j++)
        arr[j] = arr[j+1];
  }
    
  return n;
}`,
      },
    ],
  },
]
