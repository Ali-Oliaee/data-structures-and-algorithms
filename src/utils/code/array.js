export default [
  {
    title: "Insert",
    codes: [
      {
        subtitle: "Insert at first",
        code: `void insertAtFirst(int array[], int &n, int newElement) {
if (n + 1 < array.length()) {
    for (int i = n - 1; i >= 0; i--) array[i + 1] = array[i];
    array[0] = newElement;
    n = n + 1;
    } 
}`,
      },
      {
        subtitle: "Insert at End",
        code: `void insertAtFirst(int array[], int &n, int newElement) {
if (n + 1 < array.length()) {
    for (int i = n - 1; i >= 0; i--) array[i + 1] = array[i];
    array[0] = newElement;
    n = n + 1;
    } 
}`,
      },
      {
        subtitle: "Insert after",
        code: `#include<iostream>
        using namespace std;
        int main()
        {
            int arr[6], i, elem;
            cout<<"Enter 5 Array Elements: ";
            for(i=0; i<5; i++)
                cin>>arr[i];
            cout<<"Enter Element to Insert: ";
            cin>>elem;
            arr[i] = elem;
            cout<<"The New Array is:";
            for(i=0; i<6; i++)
                cout<<arr[i]<<"  ";
            cout<<endl;
            return 0;
        }`,
      },
    ],
  },
  {
    title: "Delete",
    codes: [
      {
        subtitle: "Delete at first",
        code: `#include<iostream>
          using namespace std;
          int main()
          {
              int arr[6], i, elem;
              cout<<"Enter 5 Array Elements: ";
              for(i=0; i<5; i++)
                  cin>>arr[i];
              cout<<"Enter Element to Insert: ";
              cin>>elem;
              arr[i] = elem;
              cout<<"The New Array is:";
              for(i=0; i<6; i++)
                  cout<<arr[i]<<"  ";
              cout<<endl;
              return 0;
          }`,
      },
      {
        subtitle: "Delete at End",
        code: `#include<iostream>
          using namespace std;
          int main()
          {
              int arr[6], i, elem;
              cout<<"Enter 5 Array Elements: ";
              for(i=0; i<5; i++)
                  cin>>arr[i];
              cout<<"Enter Element to Insert: ";
              cin>>elem;
              arr[i] = elem;
              cout<<"The New Array is:";
              for(i=0; i<6; i++)
                  cout<<arr[i]<<"  ";
              cout<<endl;
              return 0;
          }`,
      },
      {
        subtitle: "Delete after",
        code: `#include<iostream>
          using namespace std;
          int main()
          {
              int arr[6], i, elem;
              cout<<"Enter 5 Array Elements: ";
              for(i=0; i<5; i++)
                  cin>>arr[i];
              cout<<"Enter Element to Insert: ";
              cin>>elem;
              arr[i] = elem;
              cout<<"The New Array is:";
              for(i=0; i<6; i++)
                  cout<<arr[i]<<"  ";
              cout<<endl;
              return 0;
          }`,
      },
    ],
  },
  {
    title: "Sort",
    codes: [
      {
        subtitle: "Bubble sort",
        code: `#include<iostream>
            using namespace std;
            int main()
            {
                int arr[6], i, elem;
                cout<<"Enter 5 Array Elements: ";
                for(i=0; i<5; i++)
                    cin>>arr[i];
                cout<<"Enter Element to Insert: ";
                cin>>elem;
                arr[i] = elem;
                cout<<"The New Array is:";
                for(i=0; i<6; i++)
                    cout<<arr[i]<<"  ";
                cout<<endl;
                return 0;
            }`,
      },
      {
        subtitle: "Merge sort",
        code: `#include<iostream>
            using namespace std;
            int main()
            {
                int arr[6], i, elem;
                cout<<"Enter 5 Array Elements: ";
                for(i=0; i<5; i++)
                    cin>>arr[i];
                cout<<"Enter Element to Insert: ";
                cin>>elem;
                arr[i] = elem;
                cout<<"The New Array is:";
                for(i=0; i<6; i++)
                    cout<<arr[i]<<"  ";
                cout<<endl;
                return 0;
            }`,
      },
      {
        subtitle: "Selection sort",
        code: `#include<iostream>
            using namespace std;
            int main()
            {
                int arr[6], i, elem;
                cout<<"Enter 5 Array Elements: ";
                for(i=0; i<5; i++)
                    cin>>arr[i];
                cout<<"Enter Element to Insert: ";
                cin>>elem;
                arr[i] = elem;
                cout<<"The New Array is:";
                for(i=0; i<6; i++)
                    cout<<arr[i]<<"  ";
                cout<<endl;
                return 0;
            }`,
      },
    ],
  },
]
