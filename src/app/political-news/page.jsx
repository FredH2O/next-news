import getNews from "@/lib/getNews.js";

const Page = async () => {
  const articles = await getNews({ section: "politics" });

  return (
    <section className="container mx-auto my-20 h-screen items-center p-3">
      <h1 className="text-center font-bold text-4xl p-2 m-2">
        Latest in Politics News &copy; The Guardian
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {articles.map((article) => (
          <div key={article.id} className="border rounded p-3">
            <h2 className="text-xl">{article.webTitle}</h2>
            <p className="font-light text-sm mt-3">
              Source:
              <a
                href={article.webUrl}
                target="_blank"
                className="text-blue-600 font-semibold pl-2 cursor-pointer"
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

export default Page;
