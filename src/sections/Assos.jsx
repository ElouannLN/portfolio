import React from "react";
import assos from "../data/associations/associations";
import AssosCard from "../components/Cards/AssosCard";

function Assos() {
  return (
    <>
      <section
        id="assos"
        className="min-h-[50vh] flex justify-center pt-[5vh] pb-[5vh]"
      >
        <div className="w-full max-w-[90%] flex flex-col items-center relative">
          <h2 className="text-4xl font-darumadrop font-bold text-center mb-5 mt-10">
            Actions associatives :
          </h2>
          <h3 className="text-xl text-center italic mb-[5vh] md:mb-16">
            Liste des différentes actions en association que j'ai pu réaliser.
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-y-5 md:gap-y-16 relative">
            {assos.map((asso, index) => (
              <React.Fragment key={asso.id}>
                <AssosCard {...asso} />
                {index < assos.length - 1 && (
                  <div
                    className="
                    w-[90%] h-[4px] bg-orange-300 my-8 md:my-0 md:mx-8
                    md:w-[4px] md:h-[90%]
                    rounded-full
                  "
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Assos;
