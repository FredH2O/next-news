import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t font-extralight border-zinc-800 text-center flex justify-center bg-zinc-800 px-2 py-5">
      <p>
        Made by{" "}
        <Link
          className="italic text-red-500 hover:underline hover:text-red-400"
          href="https://github.com/FredH2O"
          target="_blank"
          rel="noopener noreferrer"
        >
          FredH2O
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
