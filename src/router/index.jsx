import { createBrowserRouter } from "react-router-dom"
import { BST, HomePage, ArrayPage, StackPage } from "../pages"

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
])

export default router
