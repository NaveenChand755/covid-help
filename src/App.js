import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import Table from "./Table";
import Helplines from "./Helpline";
import Analytics from "./Analytics";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <NavLink exact={true} activeClassName="is-active" to="/">
                  hospitals
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink
                  exact={true}
                  activeClassName="is-active"
                  to="/helpline"
                >
                  helpline
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink
                  exact={true}
                  activeClassName="is-active"
                  to="/analytics"
                >
                  analytics
                </NavLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <Route exact path="/helpline" component={Helplines}></Route>
            <Route exact path="/" component={Table}></Route>
            <Route exact path="/analytics" component={Analytics}></Route>
            <p>
              <br></br>
              <h4>
                {" "}
                <i class="fa fa-phone" aria-hidden="true"></i> : CORONA ( COVID
                19 ) HELPLINE : 011-23978046 OR 1075{" "}
              </h4>
              <h4>
                {" "}
                <i class="fa fa-home" aria-hidden="true"></i> : BBMP COVID
                HELPLINE : 1912
              </h4>
            </p>
            <p>
              {" "}
              <h4>
                {" "}
                <i class="fa fa-phone-square" aria-hidden="true"></i> :
                KARNATAKA COVID 19 HELPLINE : 14410 , 080-46848600 , 1075 , 104{" "}
              </h4>
            </p>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <i class="fa fa-copyright" aria-hidden="true"></i> It is health that
            is real wealth and not pieces of gold and silver.
          </Footer>
        </Layout>
      </Router>
      ,
    </div>
  );
}

export default App;
