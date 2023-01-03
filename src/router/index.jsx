import { createBrowserRouter } from "react-router-dom"
import { BST, HomePage } from "../pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/bst",
    element: <BST />,
  },
])

export default router
