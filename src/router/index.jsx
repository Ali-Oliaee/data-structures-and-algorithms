import { createBrowserRouter } from "react-router-dom"
import { BST, HomePage, ArrayPage } from "../pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/array",
    element: <ArrayPage />,
  },
  {
    path: "/bst",
    element: <BST />,
  },
])

export default router
