export default 
[	
	{
		title: "Pushing Into Queue",
		codes: 
		[
		  {
			subtitle: "EnQueue",
			code: `
			bool EnQueue::EnQueue(int x)
			{
				if (isFull()) {
					cout << "Queue Overflow";
					return false;
				} 
				else 
				{
					a[++Rear] = x;
					cout << x << " enqueued to Queue"<< endl;
					return true;
				}
			}`
		  },
		],
	},
	{
		title: "Poping From Queue",
		codes: 
		[
		  {
			subtitle: "DeQueue",
			code: `
			int Queue::DeQueue()
			{
				if (isEmpty())
				{
					cout << "Queue Underflow";
					return 0;
				}
				else 
				{
					int x = a[++Front];
					return x;
				}
			}`
		  },
		],
	},
	{
		title: "Is Queue Full?",
		codes: 
		[
		  {
			subtitle: "isFull",
			code: `
			bool Queue::isFull()
			{
				return (Rear==MAX-1);
			}`
		  },
		],
	},
	{
		title: "Is Queue Empty?",
		codes: 
		[
		  {
			subtitle: "isEmpty",
			code: `
			bool Queue::isEmpty()
			{
				return (Front==Rear);
			}`
		  },
		],
	},
]