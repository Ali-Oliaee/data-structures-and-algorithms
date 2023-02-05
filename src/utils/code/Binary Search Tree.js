export default [
  {
    title: "Insert",
    codes: [
      {
        subtitle: "Insert",
        code: `
		bool BST::insert(int data)
		{
			Node *r = root, *leaf;
			if(root == NULL)
			{
				Node *Root = new Node();
				Root->data = data;
				root = Root;
				return true;
			}
			while(r != NULL)
			{
				leaf = r;
				if(data < r->data)
					r = r->Lchild;
				else if(data > r->data)
					r = r->Rchild;
				else
				{
					std::cout << "The "<< data << " is duplicate !!";
					return false;
				}
			}

			r = new Node();
			r->data = data;

			if(data < leaf->data)
				leaf->Lchild = r;
			else
				leaf->Rchild = r;
			return true;
		}`,
      },
	],
  },
  {
	title: "Search",
	codes: [
        subtitle: "Recursive Search",
        code: `
		Node* BST::recSearch(Node* Root, int key)
		{
			if(Root == NULL || Root->data == key)
				return Root;
			if(Root->data > key)
				return (recSearch(Root->Lchild, key));
			return (recSearch(Root->Rchild, key));
		}`,
      },
      {
        subtitle: "Search by value",
        code: `
		bool BST::search(int key)
		{
			Node *r = root;
			while(r != NULL) 
			{
				if(key < r->data)
					r = r->Lchild;
				else if(key > r->data)
					r = r->Rchild;
				else
					return true; 
			}
			return false;
		}`,
      },
    ],
  },
  {
    title: "Traverse",
    codes: [
      {
        subtitle: "Inorder",
        code: `
		void BST::inorder(Node *n)
		{
			if(n != NULL)
			{
				inorder(n->Lchild);
				std::cout << n->data << " ";
				inorder(n->Rchild);
			}
		}`,
      },
      {
        subtitle: "Preorder",
        code: `
		void BST::Preorder(Node *n)
		{
			if(n != NULL)
			{
				std::cout << n->data << " ";
				inorder(n->Lchild);
				inorder(n->Rchild);
			}
		}`,
      },
      {
        subtitle: "Postorder",
        code: `
		void BST::Postorder(Node *n)
		{
			if(n != NULL)
			{
				inorder(n->Lchild);
				inorder(n->Rchild);
				std::cout << n->data << " ";
			}
		}`,
      },
	  {
        subtitle: "Levelorder",
        code: `
		void BST::Levelorder(Node *n)
		{
			Queue Q = new Queue();
			Btree n;
			
			Q.enqueue(t); // insert pointer t into Q
			While(! Q.empty())
			{
				n = Q.dequeue(); // remove next node from the front of Q
				
				if(! n.isEmpty())
				{
					n.print(); // show the value of n or n->data
					Q.enqueue(n.getLeft);
					Q.enqueue(n.getright);
				}
			}
		}`,
      },
    ],
  },
  {
    title: "minimum Value",
    codes: [
      {
        subtitle: "minimum Value Of BST",
	    code: 
	    `Node* BST::minValue(Node *n)
		{
			Node *current = n;
			while(current->Lchild != NULL)
				current = current->Lchild;
			return current;
		}`,
      },
    ],
  },
      {
    title: "successor",
    codes: [
      {
        subtitle: "successor",
	    code: 
	    `Node* BST::successor(int key)
		{
			Node *n = recSearch(root,key);
			if(n->Rchild != NULL)
				return minValue(n->Rchild);
			Node *r = root, *successor;
			while(r != NULL)
			{
				if(n->data < r->data)
				{
					successor = r;
					r = r->Lchild;
				}
				else if(n->data > r->data)
				{
					successor = r;
					r = r->Rchild;
				}
				else
					break;
			}
			return successor;
		}`,
      },
    ],
  },{
    title: "Delete",
    codes: [
      {
        subtitle: "Delete",
	    code: 
	    `bool BST::Delete(int key)
		{
			if(root == NULL)
				return false;
			if(!search(key))
			{
				std::cout << " There is no such value to be deleted !!\n";
				return false;
			}

			Node *current = recSearch(root,key);
			Node *parent = successor(key);

			if(current == NULL)
				return false;
			// deleting a leaf node	----------------
			if(current->Lchild == NULL && current->Rchild == NULL)
			{
				if(current != root)
				{
					if(parent->Lchild == current)
						parent->Lchild = NULL;
					else
						parent->Rchild = NULL;
				}
				else
					root = NULL;
			}
			// -------------------------------------
			// deleting a node with 2 children -----
			else if(current->Lchild && current->Rchild)
			{
				Node *min = minValue(current->Rchild);
				int value = min->data;
				Delete(value);
				current->data = value;
			}
			// -------------------------------------
			// deleting a node with one chid -------
			else
			{
				Node *child = (current->Lchild) ? current->Lchild : current->Rchild;
				if(current != root)
				{
					if(current == parent->Lchild)
						parent->Lchild = child;
					else
						parent->Rchild = child;
				}
				else
					root = child;
			}
			// -------------------------------------
		}`,
      },
    ],
  },{
    title: "Print Odd Nodes",
    codes: [
      {
		subtitle: "Print Odd Nodes",
		code:`
		void BST::printOddNodes(Node *Root, bool isOdd = true)
		{
			// If empty tree
		    if (Root == NULL)
				return;
			// If current node is of odd level
			if (isOdd)
				std::cout << Root->data << " " ;
		    // Recur for children with isOdd switched.
			printOddNodes(Root->Lchild, !isOdd);
			printOddNodes(Root->Rchild, !isOdd);
		}`,
	  },
    ],
  },
  {
    title: "Counting The Leaves",
    codes: [
      {
		subtitle: "Counting The Leaves",
		code:`
		int BST::getLeafCount(Node* Root)
		{
			if(Root == NULL)
				return 0;
			if(Root->Lchild == NULL && Root->Rchild == NULL)
				return 1;
			else
				return getLeafCount(Root->Lchild) + getLeafCount(Root->Rchild);
		}`,
	  },
    ],
  },
  {
    title: "Maximum Depth",
    codes: [
      {
	    subtitle: "Maximum Depth Of BST",
		code:`
		int BST::maxDepth(Node* Root)
		{
			if (Root == NULL)
				return 0;
			else
			{
				/* compute the depth of each subtree */
				int lDepth = maxDepth(Root->Lchild);
				int rDepth = maxDepth(Root->Rchild);
				/* use the larger one */
				if (lDepth > rDepth)
					return(lDepth + 1);
				else 
					return(rDepth + 1);
			}
		}`,
	  },
    ],
  },			
]
