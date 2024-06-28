export const DEFAULT_IMAGE =
  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";

export const getImageFromArticle = (article) => {
  if (!article || article?.media?.length === 0) {
    return {
      url: DEFAULT_IMAGE,
      caption: "placeholder",
    };
  }

  const images = article.media.filter((mi) => mi.type === "image");
  const coverImage = images[0] || {};
  const coverImageMeta = coverImage?.["media-metadata"].find((img) => {
    return img?.format === "mediumThreeByTwo440";
  });

  return {
    url: coverImageMeta?.url,
    caption: coverImage?.caption,
  };
};

export const getValidatedArticles = (articles) => {
  return articles.map((article) => {
    return {
      id: article.asset_id,
      url: article.url,
      title: article.title,
      description: article.abstract,
      coverImage: getImageFromArticle(article),
      date: article.published_date,
      author: article.byline,
    };
  });
};
