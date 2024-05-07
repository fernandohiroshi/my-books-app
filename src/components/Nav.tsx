import Link from "next/link";
import { BiHome, BiLogoGithub, BiSolidUserCircle } from "react-icons/bi";

const Nav = () => {
  return (
    <nav className="flex gap-4 md:gap-8">
      <Link href="/" title="Home">
        <BiHome className="sm:hidden hover:text-pink-600 duration-500 ease-in-out lg:size-6" />
        <span className="sm:block hidden hover:text-pink-600 duration-500 ease-in-out">
          Home
        </span>
      </Link>
      <Link href="/" target="_blank" title="Code Repository">
        <BiLogoGithub className="sm:hidden hover:text-pink-600 duration-500 ease-in-out lg:size-6" />
        <span className="sm:block hidden hover:text-pink-600 duration-500 ease-in-out">
          Github
        </span>
      </Link>
      <Link
        href="https://hiroshidev.vercel.app/"
        target="_blank"
        title="My Portfolio"
      >
        <BiSolidUserCircle className="sm:hidden hover:text-pink-600 duration-500 ease-in-out lg:size-6" />
        <span className="sm:block hidden hover:text-pink-600 duration-500 ease-in-out">
          Portfolio
        </span>
      </Link>
    </nav>
  );
};

export default Nav;
