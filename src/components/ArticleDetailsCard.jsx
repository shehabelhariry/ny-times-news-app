import { LinkOutlined } from "@ant-design/icons";
import { Col, Image, Row, Space, Typography } from "antd";
import React from "react";

const { Title, Paragraph, Text, Link } = Typography;

const ArticleDetailsCard = ({ article }) => {
  const { title, author, date, section, description, coverImage, url } =
    article;

  return (
    <div style={{ padding: 20 }}>
      <Row gutter={[16, 16]}>
        <Col span={18} push={2}>
          <Title level={3}>{title}</Title>
          <Space direction="vertical">
            <Text underline>{author}</Text>
            <Text>{date}</Text>
          </Space>
        </Col>
        <Col span={18} push={2}>
          <Image src={coverImage.url} alt={coverImage.caption} />
        </Col>
        <Col span={18} push={2}>
          <Paragraph>{section}</Paragraph>
          <Paragraph>{description}</Paragraph>
          <Link target="_blank" href={url}>
            <Space>
              <LinkOutlined />
              Go to full article
            </Space>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default ArticleDetailsCard;
