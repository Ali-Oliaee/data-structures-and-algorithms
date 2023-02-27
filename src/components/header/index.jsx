import { Layout } from "antd"
import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
  LinkOutlined,
} from "@ant-design/icons"
import { Link } from "react-router-dom"
import "./styles.scss"

const Header = () => {
  const { Header } = Layout

  return (
    <Header className="header">
      <Link to="/data-structures-qiet/" className="home-link">
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
        <a
          target="_blank"
          href="https://linkedinin.com/in/ali-oliaee/"
          className="link"
        >
          <LinkedinFilled className="icon" />
        </a>
        <a
          target="_blank"
          href="https://instagram.com/ali._.oliaee/"
          className="link"
        >
          <InstagramFilled className="icon" />
        </a>
        <a target="_blank" href="https://ali-oliaee.ir" className="link">
          <LinkOutlined className="icon" />
        </a>
      </div>
    </Header>
  )
}

export default Header
