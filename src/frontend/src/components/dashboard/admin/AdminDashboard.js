/* eslint-disable no-console */
/* eslint no-console: "error" */

import React from "react";
import { Switch, Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Badge, Dropdown, Avatar } from "antd";
import {
  UserDeleteOutlined,
  UserAddOutlined,
  ProfileOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  AppstoreOutlined,
  DollarCircleOutlined,
  FileDoneOutlined,
  BellFilled,
  SwitcherOutlined,
  ProjectOutlined
} from "@ant-design/icons";
import ProfileDetails from "./user/ProfileDetails";
import InvestorsAndFunding from "./InvestorsAndFunding";
import SmeAndProjects from "./SmeAndProjects";
import Create from "./user/Create";
import Remove from "./user/Remove";
import Update from "./user/Update";
import EditProfile from "./user/EditProfile";
import CreatCategory from "./category/Create";
import ViewCategory from "./category/View";
import DeleteCategory from "./category/Delete";
import UpdateCategory from "./category/Update";
import CreateProject from "./projects/Create";
import ViewProject from "./projects/View";





const menu = (
  <Menu id="dropdown-menu">
    <Menu.Item className="menu-icon" icon={<UserOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item className="menu-icon" icon={<UsergroupAddOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Manage Users
      </a>
    </Menu.Item>
    <Menu.Item className="menu-icon" icon={<FileDoneOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Review Reports
      </a>
    </Menu.Item>
    <Menu.Item className="menu-icon" icon={<SettingOutlined />}>

      <a target="_blank" rel="noopener noreferrer" href="#">
        Settings
      </a>
    </Menu.Item>
    <Menu.Item className="menu-icon" icon={<LogoutOutlined />}>
    { " " }
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
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ paddingTop: "63px" }}>
          <div className="logo"></div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<ProfileOutlined />}>
              <Link to="/admin/ProfileDetails">Profile Details</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<AppstoreOutlined />}>
              <Link to="/admin/smeandprojects"> SMEs/Projects</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DollarCircleOutlined />}>
              <Link to="/admin/investorsandfunding">Investors/Funding</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="4" icon={<UserAddOutlined />}>
                <Link to="/admin/create-user">Create</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<UserOutlined />}>
                <Link to="/admin/update-user">Update</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<UserDeleteOutlined />}>
                <Link to="/admin/deactivate-user">Deactivate</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<SwitcherOutlined />} title="Category">
              <Menu.Item key="7" icon={<SwitcherOutlined />}>
                <Link to="/admin/create-category">Create Category</Link>
              </Menu.Item>
              <Menu.Item key="8" icon={<SwitcherOutlined />}>
                <Link to="/admin/view-category">View Category</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<ProjectOutlined />} title="Projects">
              <Menu.Item key="9" icon={<ProjectOutlined />}>
                <Link to="/admin/create-project">Create Project</Link>
              </Menu.Item>
              <Menu.Item key="10" icon={<ProjectOutlined />}>
                <Link to="/admin/view-projects">View Projects</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="3" icon={<LogoutOutlined />}>
              {" "}
              Log Out
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background header"> */}
          <nav class="navbar">
            <Link className="dashboard-img" to="#">
              <img
                src={
                  "https://res.cloudinary.com/lordefid/image/upload/c_scale,h_50/v1590937828/Group_160_2x_wad30b.png"
                }
                alt="logo"
              />
            </Link>
            <div>
              <Badge className="badge-item" count={5}>
                <a href="#" className="example" />
              </Badge>
              <BellFilled className="notificationBell" />
            </div>
            <Dropdown overlay={menu}>
              <Avatar
                src="https://res.cloudinary.com/lordefid/image/upload/v1567112037/220190826_163351912_r9yfcl.jpg"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              />
            </Dropdown>
          </nav>

          {/* Content elements are here */}

          <Content style={{ margin: "0 16px" }}>
          <div className="content-title">
              <h5>WELCOME TO YOUR SUPER DOPE DASHBOARD</h5>
              <p>Be the BOSS</p>
            </div>
            <Router history={this.props.history}>
              <Switch>
                <Route path="/admin/investorsandfunding" component={InvestorsAndFunding} />
                <Route path="/admin/smeandprojects" component={SmeAndProjects} />
                <Route path="/admin/create-user" component={Create} />
                <Route path="/admin/update-user" component={Update} />
                <Route path="/admin/deactivate-user" component={Remove} />
                <Route path="/admin/create-category" component={CreatCategory} />
                <Route path="/admin/view-category" component={ViewCategory} />
                <Route path="/admin/delete-category/:categoryId" component={DeleteCategory} />
                <Route path="/admin/update-category/:categoryId" component={UpdateCategory} />
                <Route path="/admin/create-project" component={CreateProject} />
                <Route path="/admin/view-projects" component={ViewProject} />
                <Route path="/admin/view-project/:projectId" component={ViewProject} />
                <Route path="/admin/ProfileDetails" component={ProfileDetails} />
                <Route path="/admin/EditProfile" component={EditProfile} />
              </Switch>
            </Router>
          </Content>
          
          {/* <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content> */}
        </Layout>
      </Layout>
    );
  }
}

export default AdminDashboard;
