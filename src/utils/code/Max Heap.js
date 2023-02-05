export default 
[	
	{
		title: "Inserting Into Max Heap",
		codes: 
		[
		  {
			subtitle: "Insert",
			code: `
			void insertNode(int arr[], int& n, int Key)
			{
				// Increase the size of Heap by 1
				n = n + 1;
				// Insert the element at end of Heap
				arr[n - 1] = Key;
				// Heapify the new node following a
				// Bottom-up approach
				heapify(arr, n, n - 1);
			}
			void heapify(int arr[], int n, int i)
			{
				// Find parent
				int parent = (i - 1) / 2;
				if (arr[parent] > 0) 
				{
					// For Max-Heap
					// If current node is greater than its parent
					// Swap both of them and call heapify again
					// for the parent
					if (arr[i] > arr[parent]) 
					{
					swap(arr[i], arr[parent]);
					// Recursively heapify the parent node
					heapify(arr, n, parent);
					}
				}
			}`
		  },
		],
	},
	{
		title: "Deleting The Root",
		codes: 
		[
		  {
			subtitle: "Delete",
			code: `
			void deleteRoot(int arr[], int& n)
			{
				// Get the last element
				int lastElement = arr[n - 1];
				// Replace root with first element
				arr[0] = lastElement;
				// Decrease size of heap by 1
				n = n - 1;
				// heapify the root node
				heapify(arr, n, 0);
			}
			void heapify(int arr[], int n, int i)
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
				if (largest != i) 
				{
					swap(arr[i], arr[largest]);
					// Recursively heapify the affected sub-tree
					heapify(arr, n, largest);
				}
			}`
		  },
		],
	},
	{
		title: "Sort Heap",
		codes: 
		[
		  {
			subtitle: "Sort Heap",
			code: `
			void heapSort(int arr[], int n)
			{
				// Build heap (rearrange array)
				for (int i = n / 2 - 1; i >= 0; i--)
					heapify(arr, n, i);
				// One by one extract an element from heap
				for (int i=n-1; i>0; i--)
				{
					// Move current root to end
					swap(arr[0], arr[i]);
					// call max heapify on the reduced heap
					heapify(arr, i, 0);
				}
			}
			
			// To heapify a subtree rooted with node i which is
			// an index in arr[]. n is size of heap
			
			void heapify(int arr[], int n, int i)
			{
				int largest = i; // Initialize largest as root
				int l = 2*i + 1; // left = 2*i + 1
				int r = 2*i + 2; // right = 2*i + 2
				// If left child is larger than root
				if (l < n && arr[l] > arr[largest])
					largest = l;
				// If right child is larger than largest so far
				if (r < n && arr[r] > arr[largest])
					largest = r;
				// If largest is not root
				if (largest != i)
				{
					swap(arr[i], arr[largest]);
					// Recursively heapify the affected sub-tree
					heapify(arr, n, largest);
				}
			}`
		  },
		],
	},
]
