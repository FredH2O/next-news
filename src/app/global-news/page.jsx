import news from "@/data/news.json";
import Image from "next/image";

const GlobalNews = () => {
  return (
    <section className="relative mt-24">
      <h2 className="text-5xl font-semibold text-center p-10">Global News</h2>
      <div className="container m-auto grid xl:grid-cols-2 gap-5">
        {news.map((article) => (
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
