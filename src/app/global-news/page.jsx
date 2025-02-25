import news from "@/data/news.json";
import Image from "next/image";

const GlobalNews = () => {
  return (
    <section className="relative my-24">
      <h2 className="text-5xl font-semibold text-center p-10">Global News</h2>
      {/* main news */}
      <div className="container m-auto flex justify-center">
        {news.slice(0, 1).map((article) => (
          <div
            key={article.id}
            className="flex flex-col justify-center items-center m-5"
          >
            <Image
              className="md:rounded-lg md:border border-zinc-700"
              src={article.image}
              width={500}
              height={100}
              alt={article.title}
            />
            <div className="p-5 text-center">
              <h3 className="text-3xl font-semibold">{article.title}</h3>
              <p className="text-zinc-400">{article.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="container m-auto grid xl:grid-cols-2 gap-5">
        {/* other news */}
        {news.slice(1).map((article) => (
          <div
            key={article.id}
            className="flex lg:flex-row flex-col gap-5 items-center px-3"
          >
            <Image
              className="rounded-lg border border-zinc-700"
              src={article.image}
              width={300}
              height={100}
              alt={article.title}
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-zinc-400">{article.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalNews;
