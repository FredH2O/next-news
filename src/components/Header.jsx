import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <header className="fixed z-20 top-0 left-0 w-full p-1 border-b border-zinc-700 bg-zinc-800">
      <div className="grid grid-cols-2">
        <div className="">
          <div className="border w-fit">
            <Link href="/" className="">
              <Image
                className="ml-2"
                src="/next-news-logo.png"
                width={70}
                height={70}
                alt="Logo"
              />
            </Link>
          </div>
        </div>

        {/* nav goes below */}
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
