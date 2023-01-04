import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/data-structures-qiet/array">Array</Link>
      <Link to="/data-structures-qiet/bst">BST</Link>
    </div>
  )
}

export default HomePage
