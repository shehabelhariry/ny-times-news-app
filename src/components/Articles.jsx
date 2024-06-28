import { Col, Row } from "antd";
import ArticleCard from "./ArticleCard";

const Articles = ({ articles }) => {
  return (
    <Row gutter={20}>
      {articles.map((article) => (
        <Col key={article.id} xs={24} sm={12} lg={6}>
          <ArticleCard article={article} />
        </Col>
      ))}
    </Row>
  );
};

export default Articles;
