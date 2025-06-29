import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer id="footer" className="flex justify-center pb-[5vh]">
      <div class="bg-orange-300 text-white w-[50%] rounded-lg shadow-[inset_0_4px_10px_rgba(0,0,0,0.2)] m-4">
        <div class="mx-auto p-4 flex flex-col justify-center md:flex-row items-center md:justify-between">
          <span class="text-sm text-center mb-[2vh] md:mb-0 text-shadow-lg">
            Site développé par mes soins sous{" "}
            <strong>React, Vite et TailwindCSS</strong> !
          </span>
          <Link
            className="text-sm font-medium text-shadow-lg cursor-pointer"
            to="hero"
            smooth={true}
            duration={1000}
          >
            Décollage 🚀
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
