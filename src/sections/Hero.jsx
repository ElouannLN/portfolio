import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";

function Hero() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col items-center justify-center px-4 mb-[5vh]"
      >
        <div className="min-h-[20vh] md:min-h-[30vh] w-full sm:w-[90vw] md:w-[80vw] bg-orange-300 rounded-2xl flex items-center justify-center shadow-[inset_0_10px_30px_rgba(0,0,0,0.2)] mt-5 md:mt-15 overflow-hidden">
          <div className="m-4 sm:m-6 md:m-[5%]">
            <h1 className="text-white font-darumadrop text-3xl md:text-6xl lg:text-7xl font-bold text-center text-shadow-lg leading-tight break-words">
              ElouannLN/portfolio
            </h1>
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl italic text-center mt-2 sm:mt-4 text-shadow-lg leading-snug break-words">
              Bienvenue sur mon portfolio !
            </h1>
          </div>
        </div>

        <Link to="about" smooth={true} duration={500} offset={-20}>
          <div className="mt-10 p-2 sm:p-3 rounded-full animate-bounce cursor-pointer">
            <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 md:h-[60px] md:w-[60px]" />
          </div>
        </Link>
      </section>
    </>
  );
}

export default Hero;
