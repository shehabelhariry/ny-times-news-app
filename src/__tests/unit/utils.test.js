import {
  DEFAULT_IMAGE,
  getImageFromArticle,
  getValidatedArticles,
} from "../../utils";

const sampleArticle = {
  uri: "nyt://article/2ebb7147-73f5-5742-b2c3-af52e76f0e1e",
  url: "https://www.nytimes.com/2024/06/27/arts/television/the-bear-abby-elliott.html",
  id: 100000009532115,
  asset_id: 100000009532115,
  source: "New York Times",
  published_date: "2024-06-27",
  updated: "2024-06-27 11:55:15",
  section: "Arts",
  subsection: "Television",
  nytdsection: "arts",
  adx_keywords:
    "Actors and Actresses;Television;Content Type: Personal Profile;Elliott, Abby;FX (TV Network);Hulu.com",
  column: null,
  byline: "By Alexis Soloski",
  type: "Article",
  title: "In ‘The Bear,’ Abby Elliott Follows a New Recipe",
  abstract:
    "The acclaimed kitchen hit has allowed Elliott, a comic actor from a famously funny family, to embrace her dramatic side.",
  des_facet: [
    "Actors and Actresses",
    "Television",
    "Content Type: Personal Profile",
  ],
  org_facet: ["FX (TV Network)", "Hulu.com"],
  per_facet: ["Elliott, Abby"],
  geo_facet: [],
  media: [
    {
      type: "image",
      subtype: "photo",
      caption:
        "When Abby Elliott was approached about starring in “The Bear,” she said, “I didn’t really quite understand how high the stakes would be.”",
      copyright: "OK McCausland for The New York Times",
      approved_for_syndication: 1,
      "media-metadata": [
        {
          url: "https://static01.nyt.com/images/2024/06/30/multimedia/30elliott-mpgf/30elliott-mpgf-thumbStandard.jpg",
          format: "Standard Thumbnail",
          height: 75,
          width: 75,
        },
        {
          url: "https://static01.nyt.com/images/2024/06/30/multimedia/30elliott-mpgf/30elliott-mpgf-mediumThreeByTwo210.jpg",
          format: "mediumThreeByTwo210",
          height: 140,
          width: 210,
        },
        {
          url: "https://static01.nyt.com/images/2024/06/30/multimedia/30elliott-mpgf/30elliott-mpgf-mediumThreeByTwo440.jpg",
          format: "mediumThreeByTwo440",
          height: 293,
          width: 440,
        },
      ],
    },
  ],
  eta_id: 0,
};

test("getImageFromArticle: should return default image in case there is no article", () => {
  const image = getImageFromArticle();
  expect(image.url).toEqual(DEFAULT_IMAGE);
  expect(image.caption).toEqual("placeholder");
});

test("getImageFromArticle: should return correct image in case it's provided in the article", () => {
  const image = getImageFromArticle(sampleArticle);
  expect(image.url).toEqual(
    "https://static01.nyt.com/images/2024/06/30/multimedia/30elliott-mpgf/30elliott-mpgf-mediumThreeByTwo440.jpg"
  );
  expect(image.caption).toEqual(
    `When Abby Elliott was approached about starring in “The Bear,” she said, “I didn’t really quite understand how high the stakes would be.”`
  );
});

test("getValidatedArticles: should return articles in the correct format", () => {
  const articles = [sampleArticle];
  const result = getValidatedArticles(articles);
  expect(result).toMatchInlineSnapshot(`
[
  {
    "author": "By Alexis Soloski",
    "coverImage": {
      "caption": "When Abby Elliott was approached about starring in “The Bear,” she said, “I didn’t really quite understand how high the stakes would be.”",
      "url": "https://static01.nyt.com/images/2024/06/30/multimedia/30elliott-mpgf/30elliott-mpgf-mediumThreeByTwo440.jpg",
    },
    "date": "2024-06-27",
    "description": "The acclaimed kitchen hit has allowed Elliott, a comic actor from a famously funny family, to embrace her dramatic side.",
    "id": 100000009532115,
    "title": "In ‘The Bear,’ Abby Elliott Follows a New Recipe",
    "url": "https://www.nytimes.com/2024/06/27/arts/television/the-bear-abby-elliott.html",
  },
]
`);
});
