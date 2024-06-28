import { Outlet } from "react-router-dom";

import { Flex, Layout, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";

const { Text } = Typography;
const MainLayout = () => {
  return (
    <Layout theme="light">
      <Header className="ny-app__header">
        <Text strong className="ny-app__header__title">
          NY Times App
        </Text>
      </Header>
      <Content className="ny-app__content">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
