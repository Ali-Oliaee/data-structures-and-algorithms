import { createBrowserRouter } from "react-router-dom"
import {
  BSTPage,
  HomePage,
  ArrayPage,
  StackPage,
  EXTPage,
  QueuePage,
  ExpressionConvertorPage,
  MinHeapPage,
  MaxHeapPage,
  SortAlgorithmsPage,
} from "@pages"

const router = createBrowserRouter([
  {
    path: "/data-structures-qiet/",
    element: <HomePage />,
  },
  {
    path: "/data-structures-qiet/sort",
    element: <SortAlgorithmsPage />,
  },
  {
    path: "/data-structures-qiet/array",
    element: <ArrayPage />,
  },
  {
    path: "/data-structures-qiet/queue",
    element: <QueuePage />,
  },
  {
    path: "/data-structures-qiet/bst",
    element: <BSTPage />,
  },
  {
    path: "/data-structures-qiet/stack",
    element: <StackPage />,
  },
  {
    path: "/data-structures-qiet/ext",
    element: <EXTPage />,
  },
  {
    path: "/data-structures-qiet/expressions",
    element: <ExpressionConvertorPage />,
  },
  {
    path: "/data-structures-qiet/min-heap",
    element: <MinHeapPage />,
  },
  {
    path: "/data-structures-qiet/max-heap",
    element: <MaxHeapPage />,
  },
])

export default router
