import Image from "next/image";
import Link from "next/link";

const paths = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Global News",
    path: "/global-news",
  },
  { name: "Sports News", path: "/sports-news" },
  {
    name: "Political News",
    path: "/political-news",
  },
];

const Header = () => {
  return (
    <header className="p-1 border-b bg-zinc-800">
      <div className="grid grid-cols-2">
        <div className="">
          <Link href="/">
            <Image
              className="ml-2"
              src="/next-news-logo.png"
              width={70}
              height={70}
              alt="Logo"
            />
          </Link>
        </div>

        <nav className="place-self-end h-full flex items-center">
          <ul className="flex mr-2 flex-row gap-3">
            {paths.map((path, index) => (
              <li
                key={index}
                className="py-1 px-3 bg-stone-700 hover:bg-stone-600 hover:text-zinc-100 rounded cursor-pointer"
              >
                <Link href={path.path}>{path.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
