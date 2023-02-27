import React from "react"
import { Layout, Menu } from "antd"
import { GithubFilled } from "@ant-design/icons"
import "./styles.scss"

const Header = () => {
  const { Header } = Layout

  const items1 = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }))

  return (
    <Header className="header">
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </Header>
  )
}

export default Header
