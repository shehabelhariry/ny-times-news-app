import { Outlet } from "react-router-dom";

import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

const MainLayout = () => {
  return (
    <Layout theme="light">
      <Header className="ny-app__header">NY Times app</Header>
      <Content className="ny-app__content">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
