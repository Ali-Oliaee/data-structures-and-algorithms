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
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sort",
    element: <SortAlgorithmsPage />,
  },
  {
    path: "/array",
    element: <ArrayPage />,
  },
  {
    path: "/queue",
    element: <QueuePage />,
  },
  {
    path: "/bst",
    element: <BSTPage />,
  },
  {
    path: "/stack",
    element: <StackPage />,
  },
  {
    path: "/ext",
    element: <EXTPage />,
  },
  {
    path: "/expressions",
    element: <ExpressionConvertorPage />,
  },
  {
    path: "/min-heap",
    element: <MinHeapPage />,
  },
  {
    path: "/max-heap",
    element: <MaxHeapPage />,
  },
])

export default router
