import { createBrowserRouter } from "react-router-dom"
import { BST, HomePage, ArrayPage } from "../pages"

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
])

export default router
