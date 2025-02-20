import news from "@/data/news.json";
import Image from "next/image";

const GlobalNews = () => {
  return (
    <section className="">
      <h2 className="text-5xl font-semibold text-center p-10">Global News</h2>
      <div className="container m-auto grid grid-cols-2 gap-5">
        {news.map((article) => (
          <div key={article.id} className="flex flex-row gap-5 items-center">
            <Image
              className="rounded-lg border border-zinc-700"
              src={article.image}
              width={300}
              height={100}
              alt={article.title}
            />
            <div>
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
