import { Layout } from "antd"
import { GithubFilled } from "@ant-design/icons"
import { Link } from "react-router-dom"
import "./styles.scss"

const Header = () => {
  const { Header } = Layout

  return (
    <Header className="header">
      <Link to="/" className="home-link">
        Home
      </Link>
      <div className="links">
        <a
          target="_blank"
          href="https://github.com/ali-oliaee/"
          className="link"
        >
          <GithubFilled className="icon" />
        </a>
      </div>
    </Header>
  )
}

export default Header
