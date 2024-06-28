import { LinkOutlined } from "@ant-design/icons";
import { Card, Flex, Space, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const ArticleCard = ({ article }) => {
  return (
    <div className="ny-app_card">
      <Card
        actions={[
          <Link state={article} to={`/article/${article.id}`}>
            <Flex align="center" justify="center">
              <Space>
                <LinkOutlined />
                View More Details
              </Space>
            </Flex>
          </Link>,
        ]}
        cover={
          <img
            alt={article?.coverImage?.caption}
            src={article?.coverImage?.url}
          />
        }
      >
        <Space direction="vertical" size={14}>
          <div>
            <Title level={5}>{article.title}</Title>
            <Text italic underline>
              {article.author}
            </Text>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default ArticleCard;
