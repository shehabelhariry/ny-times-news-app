import { useQuery } from "react-query";
import { getMostViewedArticles } from "../services";
import { Spin } from "antd";

import Articles from "../components/Articles";

const Home = () => {
  const {
    isLoading,
    error,
    data: articles,
  } = useQuery("getMostViewed", () => {
    return getMostViewedArticles();
  });

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <div>{error}</div>;
  }
  console.log(articles);
  return <Articles articles={articles} />;
};
export default Home;
