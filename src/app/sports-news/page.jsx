import axios from "axios";

const getNews = async () => {
  const { data } = await axios.get(
    `https://content.guardianapis.com/search?section=sport&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`
  );
  console.log(data);
  return data.response.results;
};

const SportsNews = async () => {
  const articles = await getNews();

  return (
    <section>
      <h1 className="text-2xl font-bold">Latest News</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2 className="text-xl font-bold">{article.webTitle}</h2>
          <p>
            Source:
            <a href={article.webUrl} className="text-blue-500">
              The Guardian
            </a>
          </p>
        </div>
      ))}
    </section>
  );
};

export default SportsNews;
