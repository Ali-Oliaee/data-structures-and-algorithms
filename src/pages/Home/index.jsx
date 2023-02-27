import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/data-structures-qiet/array">Array</Link>
      <br />
      <Link to="/data-structures-qiet/stack">Stack</Link>
      <br />
      <Link to="/data-structures-qiet/queue">Queue</Link>
      <br />
      <Link to="/data-structures-qiet/bst">BST</Link>
      <br />
      <Link to="/data-structures-qiet/ext">EXT</Link>
      <br />
      <Link to="/data-structures-qiet/expressions">Expressions</Link>
      <br />
    </div>
  )
}

export default HomePage
