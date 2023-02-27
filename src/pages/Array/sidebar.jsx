import React from "react"
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem("Create", "sub1", <MailOutlined />, [
    getItem(
      null,
      null,
      null,
      [getItem("Random", "1"), getItem("Manual", "2")],
      "group"
    ),
  ]),
  getItem("Insert", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Delete", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("sort", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
]
const onClick = (e) => {
  console.log("click", e)
}
const ArraySidebar = () => (
  <Menu
    onClick={onClick}
    className="array-sidebar"
    mode="vertical"
    items={items}
  />
)
export default ArraySidebar
