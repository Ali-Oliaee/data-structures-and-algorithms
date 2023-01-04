import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/array">Array</Link>
      <Link to="/bst">BST</Link>
    </div>
  )
}

export default HomePage
