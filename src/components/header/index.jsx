import React from "react"
import { Button, Layout, Menu } from "antd"
import { GithubFilled } from "@ant-design/icons"
import "./styles.scss"
import { Link } from "react-router-dom"

const Header = () => {
  const { Header } = Layout

  return (
    <Header className="header">
      <Link to="/data-structures-qiet/">Home</Link>
      <a
        target="_blank"
        href="https://github.com/ali-oliaee/"
        className="github-link"
      >
        <GithubFilled className="github-icon" />
      </a>
    </Header>
  )
}

export default Header
