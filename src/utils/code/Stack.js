export default 
[	
	{
		title: "Pushing Into Stack",
		codes: 
		[
		  {
			subtitle: "Push",
			code: `
			bool Stack::push(int x)
			{
				if (isFull()) 
				{
					cout << "Stack Overflow";
					return false;
				} 
				else 
				{
					a[++top] = x;
					cout << x << " pushed into stack." << endl;
					return true;
				}
			}`
		  },
		],
	},
	{
		title: "Poping From Stack",
		codes: 
		[
		  {
			subtitle: "Pop",
			code: `
			int Stack::pop()
			{
				if (isEmpty()) 
				{
					cout << "Stack Underflow";
					return 0;
				}
				else 
				{
					int x = a[top--];
					return x;
				}
			}`
		  },
		],
	},
	{
		title: "Peekin The Top",
		codes: 
		[
		  {
			subtitle: "Peek",
			code: `
			int Stack::peek()
			{
				if (isEmpty()) 
				{
					cout << "Stack is Empty";
					return 0;
				}
				else 
				{
					int x = a[top];
					return x;
				}
			}`
		  },
		],
	},
	{
		title: "Is Stack Full?",
		codes: 
		[
		  {
			subtitle: "isFull",
			code: `
			bool Stack::isFull()
			{
				return (top==MAX-1);
			}`
		  },
		],
	},
	{
		title: "Is Stack Empty?",
		codes: 
		[
		  {
			subtitle: "isEmpty",
			code: `
			bool Stack::isEmpty()
			{
				return (top < 0);
			}`
		  },
		],
	},
]