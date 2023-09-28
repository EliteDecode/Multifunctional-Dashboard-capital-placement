import { useState } from "react";

import { Layout, theme } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ContentBox from "./components/ContentBox";
import HeaderTab from "./components/HeaderTab";
import Info from "./pages/Info";
import Home from "./pages/Home";

const { Header, Content } = Layout;
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Router>
      <Layout className="fixed-height min-h-screen h-screen">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <Routes>
            <Route path="/info/:firm" Component={Info} />
            <Route path="/" Component={Home} />
          </Routes>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
