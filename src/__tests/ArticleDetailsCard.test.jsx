import { render } from "@testing-library/react";
import React from "react";
import ArticleDetailsCard from "../components/ArticleDetailsCard";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test("renders ArticleDetailsCard Correctly", async () => {
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

  const { getByText, getByAltText, debug } = render(
    <ArticleDetailsCard article={sampleArticle} />
  );

  const title = getByText("Biden Cannot Go On Like This");
  const author = getByText("By Frank Bruni");
  const img = getByAltText("Biden Picture Caption");
  const link = getByText("Go to full article");
  const date = getByText("2024-06-28");
  const description = getByText(
    "Democrats must grapple with his disastrous debate."
  );

  expect(title).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(img.getAttribute("src")).toEqual(
    "https://static01.nyt.com/images/2024/06/28/multimedia/28bruni-onsite-bwfv/28bruni-onsite-bwfv-mediumThreeByTwo440.jpg"
  );

  expect(link).toBeInTheDocument();
  expect(link.parentElement.parentElement.getAttribute("href")).toEqual(
    "https://www.nytimes.com/2024/06/28/opinion/presidential-debate-trump-biden-2024.html"
  );

  expect(date).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
