const baseUrl = "https://api.nytimes.com/svc";
const key = import.meta.env.VITE_NY_TIMES_API;

export const getMostViewedArticles = async () => {
  const resp = await fetch(
    `${baseUrl}/mostpopular/v2/viewed/1.json?api-key=${key}`
  );
  return await resp.json();
};
