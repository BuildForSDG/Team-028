/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint no-console: "error" */

import React from "react";
import SmeProposals from "./SmeProposals";
import TotalInvestments from "./TotalInvestments";
import InvestmentHistory from "./InvestmentHistory";
import { Badge, Dropdown, Layout, Menu } from "antd";
import { FileDoneOutlined } from "@ant-design/icons";
import {
  CaretDownFilled,
  UsergroupAddOutlined,
  SettingOutlined,
  LogoutOutlined,
  ReconciliationOutlined,
  ProjectOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { Switch, Router, Route } from "react-router-dom";
import { BellFilled, UserAddOutlined, UserSwitchOutlined, RiseOutlined } from "@ant-design/icons";
import { BarChartOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import AllUsers from "./user/AllUsers";
import Create from "../general/Create";
import Remove from "../general/Remove";
import Update from "../general/Update";
import ProfileDetails from "./user/ProfileDetails";
import ProjectDetails from "./ProjectDetails";
import EditProfile from "./user/EditProfile";

import Invest from "./invest";
import ViewProject from "../general/View";
import CreateProject from "../general/Create";

const menu = (
  <Menu id="dropdown-menu">
    <Menu.Item className="menu-icon" icon={<UserOutlined />}>
    <Link to="/investor/AllUsers">Profile</Link>
    </Menu.Item>
    <Menu.Item className="menu-icon" icon={<UsergroupAddOutlined />}>
      <Link to="/investor/AllUsers">Manage Users</Link>
    </Menu.Item>
    <Menu.Item className="menu-icon" icon={<FileDoneOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Review Reports
      </a>
    </Menu.Item>
  </Menu>
);
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class InvestorDashboard extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ paddingTop: "63px" }}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<RiseOutlined />}>
              <Link to="/investor/ProfileDetails">Profile Details</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<PieChartOutlined />}>
              <Link to="/investor/SmeProposals">All Proposals</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Investments">
              <Menu.Item key="4"><Link to="/investor/InvestmentHistory"><RiseOutlined />History</Link></Menu.Item>
              <Menu.Item key="13" icon={<UserSwitchOutlined />}><Link to="/investor/invest">Make Investments</Link></Menu.Item>
              <Menu.Item key="5" icon={<UserSwitchOutlined />}><Link to="/investor/TotalInvestments">Amount</Link></Menu.Item >
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} title="Users">
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to="/investor/AllUser">All Users</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />}>
                <Link to="/investor/create-user">Create</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                <Link to="/investor/update-user">Update</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<UserOutlined />}>
                <Link to="/investor/deactivate-user">Deactivate</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="6"><Link to="/investor/InvestmentHistory"><RiseOutlined />View Projects</Link></Menu.Item>

            <SubMenu key="sub3" icon={<UserOutlined />} title="Investments">
            <Menu.Item key="6"><Link to="#"><RiseOutlined />Invest</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/investor/InvestmentHistory"><RiseOutlined />History</Link></Menu.Item>
              <Menu.Item key="7" icon={<UserSwitchOutlined />}><Link to="/investor/TotalInvestments">Amount</Link>
            </Menu.Item >
              <Menu.Item key="8" icon={<PieChartOutlined />}>
              <Link to="/investor/SmeProposals">All Proposals</Link>
            </Menu.Item>              
            </SubMenu>        
            
           
         
            <Menu.Item key="3" icon={<LogoutOutlined/>}> Log Out</Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <nav class="navbar">
                <Link className="dashboard-img" to="#">
                  <img src={"https://res.cloudinary.com/lordefid/image/upload/c_scale,h_50/v1590937828/Group_160_2x_wad30b.png"} alt="logo" />
                </Link>
                <div>
                  <Badge className="badge-item" count={5}>
                    <a href="#" className="example" />
                  </Badge>
                    <BellFilled className="notificationBell" />
                  </div>
                <Dropdown overlay={menu}>
                  <Avatar src="https://res.cloudinary.com/lordefid/image/upload/v1567112037/220190826_163351912_r9yfcl.jpg" className="ant-dropdown-link" onClick={(e) => e.preventDefault()} />
                </Dropdown>
            </nav>

            {/* Content Elements are here */}
          <Content style={{ margin: "0 16px" }}>
            <div className="content-title">
              {/* <h5>WELCOME TO YOUR INVESTMENT DASHBOARD</h5>
              <p>Here you can view and manage all your investments</p>*/}
            </div>
            
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Router history={this.props.history}>
                <Switch>
                  <Route path="/investor/SmeProposals" component={SmeProposals} />
                  <Route path="/investor/InvestmentHistory" component={InvestmentHistory} />
                  <Route path="/investor/TotalInvestments" component={TotalInvestments} />
                  <Route path="/investor/AllUsers" component={AllUsers} />
                  <Route path="/investor/create-user" component={Create} />
                  <Route path="/investor/update-user" component={Update} />
                  <Route path="/investor/deactivate-user" component={Remove} />
                  <Route path="/investor/ProfileDetails" component={ProfileDetails} />
                  <Route path="/investor/EditProfile" component={EditProfile} />
                  <Route path="/investor/create-project" component={CreateProject} />
                  <Route path="/investor/view-projects" component={ViewProject} />
                  <Route path="/investor/view-project/:projectId" component={ViewProject} />
                  <Route path="/investor/ProjectDetails" component={ProjectDetails} />
                  <Route path="/investor/invest" component={Invest} />
                </Switch>
              </Router>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>eaZSME ©2020  Created by Team-028</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

export default InvestorDashboard;
