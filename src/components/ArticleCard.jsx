import { LinkOutlined } from "@ant-design/icons";
import { Card, Flex, Space, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const ArticleCard = ({ article }) => {
  return (
    <div className="ny-app_card">
      <Card
        actions={[
          <Link to={`/article/${article.id}`}>
            <Flex align="center" justify="center">
              <Space>
                <LinkOutlined />
                Read full article
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
          <Paragraph>{article.description}</Paragraph>
        </Space>
      </Card>
    </div>
  );
};

export default ArticleCard;
