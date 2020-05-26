/* eslint-disable no-console */
/* eslint no-console: "error" */

import React from "react";
import { Badge, Dropdown, Avatar } from "antd";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import { FileDoneOutlined, BellFilled } from "@ant-design/icons";
import { CaretDownFilled, UsergroupAddOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

const menu = (
  <Menu id="dropdown-menu">
    <Menu.Item icon={<UserOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item icon={<UsergroupAddOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Manage Users
      </a>
    </Menu.Item>
    <Menu.Item icon={<FileDoneOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Review Reports
      </a>
    </Menu.Item>
    <Menu.Item icon={<SettingOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Settings
      </a>
    </Menu.Item>
    <Menu.Item icon={<LogoutOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Logout
      </a>
    </Menu.Item>
  </Menu>
);

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ paddingTop: "60px" }}>
          <div className="logo"></div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              View Projects
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}></Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background header">
          <ul className="dashboard-items">
                <li className="dashboard-item-1">
                    <Link className="dashboard-img" to="#">
                      <img src={"./logo.png"} alt="logo" />
                    </Link></li>
                    <li className="dashboard-item-1 item-right">
                    <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      <CaretDownFilled />
                      </a>
                    </Dropdown>
                </li>  
                <li className="dashboard-item-1 item-right">   
                    <Avatar src="https://res.cloudinary.com/lordefid/image/upload/v1567112037/220190826_163351912_r9yfcl.jpg" />
                </li>
                <li className="dashboard-item-1 item-right">
                    <Badge className="badge-item" count={5}>
                      <a href="#" className="example" />
                    </Badge>
                    <BellFilled className="notificationBell" />
                </li>
              </ul>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AdminDashboard;
