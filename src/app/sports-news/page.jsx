import getNews from "@/lib/getNews.js";

const SportsNews = async () => {
  const articles = await getNews({ section: "sport" });

  return (
    <section className="container m-auto pt-20 my-20">
      <h1 className="text-4xl font-bold p-5">
        Latest Sports News &copy;The Guardian
      </h1>
      <div className="grid grid-cols-2 gap-3">
        {articles.map((article) => (
          <div key={article.id} className="border rounded border-zinc-700 p-3">
            <h2 className="text-xl font-bold pb-3">{article.webTitle}</h2>
            <p className="">
              Source:
              <a
                href={article.webUrl}
                target="_blank"
                className="text-blue-600 cursor-pointer font-semibold pl-2"
              >
                The Guardian
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SportsNews;
