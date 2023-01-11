import React from "react"
import { Header } from "../components"
import { Layout, theme } from "antd"

const MainLayout = ({ children }) => {
  const { Content } = Layout
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout>
      <Header />
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
  )
}

export default MainLayout
