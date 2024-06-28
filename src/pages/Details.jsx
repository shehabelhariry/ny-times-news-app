import { useLocation } from "react-router-dom";
import ArticleDetailsCard from "../components/ArticleDetailsCard";

const Details = () => {
  const location = useLocation();
  const article = location.state;

  return <ArticleDetailsCard article={article} />;
};

export default Details;
