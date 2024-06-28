import { LinkOutlined } from "@ant-design/icons";
import { Card, Flex, Space } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";

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
        <Meta title={article.title} description={article.description} />
      </Card>
    </div>
  );
};

export default ArticleCard;
