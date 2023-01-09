import { createBrowserRouter } from "react-router-dom"
import {
  BST,
  HomePage,
  ArrayPage,
  StackPage,
  EXTPage,
  ExpressionConvertorPage,
} from "../pages"

const router = createBrowserRouter([
  {
    path: "/data-structures-qiet/",
    element: <HomePage />,
  },
  {
    path: "/data-structures-qiet/array",
    element: <ArrayPage />,
  },
  {
    path: "/data-structures-qiet/bst",
    element: <BST />,
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
])

export default router
