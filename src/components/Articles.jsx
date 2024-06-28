import { Col, Row } from "antd";
import ArticleCard from "./ArticleCard";

const Articles = ({ articles }) => {
  return (
    <Row gutter={20}>
      {articles.map((article) => (
        <Col xs={24} sm={12} lg={6}>
          <ArticleCard key={article.id} article={article} />
        </Col>
      ))}
    </Row>
  );
};

export default Articles;
