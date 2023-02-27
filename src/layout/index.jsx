import React from "react"
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Layout, Menu, theme } from "antd"
import { Header } from "../components"

const { Content, Sider } = Layout

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}))
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1)
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1
        return {
          key: subKey,
          label: `option${subKey}`,
        }
      }),
    }
  }
)

const MainLayout = ({ sidebar, children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider
          style={{
            background: colorBgContainer,
          }}
        >
          {sidebar}
        </Sider>
        <Layout>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default MainLayout
