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
    path: "/data-structures-and-algorithms/",
    element: <HomePage />,
  },
  {
    path: "/data-structures-and-algorithms/sort",
    element: <SortAlgorithmsPage />,
  },
  {
    path: "/data-structures-and-algorithms/array",
    element: <ArrayPage />,
  },
  {
    path: "/data-structures-and-algorithms/queue",
    element: <QueuePage />,
  },
  {
    path: "/data-structures-and-algorithms/bst",
    element: <BSTPage />,
  },
  {
    path: "/data-structures-and-algorithms/stack",
    element: <StackPage />,
  },
  {
    path: "/data-structures-and-algorithms/ext",
    element: <EXTPage />,
  },
  {
    path: "/data-structures-and-algorithms/expressions",
    element: <ExpressionConvertorPage />,
  },
  {
    path: "/data-structures-and-algorithms/min-heap",
    element: <MinHeapPage />,
  },
  {
    path: "/data-structures-and-algorithms/max-heap",
    element: <MaxHeapPage />,
  },
])

export default router
