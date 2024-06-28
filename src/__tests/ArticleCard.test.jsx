import { render } from "@testing-library/react";
import ArticleCard from "../components/ArticleCard";
import React from "react";
import { MemoryRouter } from "react-router-dom";

test("renders Article Card Correctly", async () => {
  const sampleArticle = {
    id: 100000009544051,
    url: "https://www.nytimes.com/2024/06/28/opinion/presidential-debate-trump-biden-2024.html",
    title: "Biden Cannot Go On Like This",
    description: "Democrats must grapple with his disastrous debate.",
    coverImage: {
      url: "https://static01.nyt.com/images/2024/06/28/multimedia/28bruni-onsite-bwfv/28bruni-onsite-bwfv-mediumThreeByTwo440.jpg",
      caption: "Biden Picture Caption",
    },
    date: "2024-06-28",
    author: "By Frank Bruni",
  };

  const { getByText, getByAltText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <ArticleCard article={sampleArticle} />
    </MemoryRouter>
  );

  const title = getByText("Biden Cannot Go On Like This");
  const author = getByText("By Frank Bruni");
  const img = getByAltText("Biden Picture Caption");
  const link = getByText("View More Details");

  expect(title).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(img.getAttribute("src")).toEqual(
    "https://static01.nyt.com/images/2024/06/28/multimedia/28bruni-onsite-bwfv/28bruni-onsite-bwfv-mediumThreeByTwo440.jpg"
  );

  expect(link).toBeInTheDocument();
});
