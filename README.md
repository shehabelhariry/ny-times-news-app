# NY Times News App

## Design Choices:

- Use Vite - React template.
- Use AntD for UI components.
- Use React Router for simple routing.
- Use React Query for http requests and simple State handling.
- Use Jest for unit testing of small functions.
- Use React Testing Library for component testing: (Good to have)

## UI Modifications nice to haves:

- Make the cards in the home page have the same height
- Make the publish date humanly readable

## Running the Project Locally

- Run `npm install`
- Create a `.env` file similar to the `.env.sample` on the root project and replact `sample-value` with a vaid NY Times api key. Go to [this link](https://developer.nytimes.com/get-started) create an account and an API key.
- Run `npm run dev` the server should be running on `http://localhost:5173/`

## Running the tests

- Run the following command: `npm run test` to run the tests
- To get the coverage, run the command: `npm run test:coverage`, the tests will run and a coverage directory will appear in the root folder with the entry: `coverage/Icov-report/index.html`

## Building the app

- Run the command: `npm run build`
- a `dist` directory will be generated with the index.html file and assets.

## Things I would add if I have time:

1. Reduce bundle size with dynamic imports and using a smaller UI library.
2. Add good support for custom styling.
3. Implement the UI improvement proposed in the first section.
4. Add a control to change between periods 1 and 7 and 30 and maybe filters if the API supports it.
5. Include 1 integeration test using Playwright or Puppeteer to make sure that the whole flow is working correctly
