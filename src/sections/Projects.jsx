import React from "react";
import projets from "../data/projects/projects";
import ProjectCard from "../components/Cards/ProjectCard";

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="min-h-[50vh] flex justify-center pt-[5vh] pb-[5vh]"
      >
        <div className="w-full max-w-[90%] flex flex-col items-center relative">
          <h2 className="text-4xl font-darumadrop font-bold text-center mb-5 mt-10">
            Quelques projets réalisés :
          </h2>
          <h3 className="text-xl text-center italic mb-[5vh] md:mb-16">
            Différents projets réalisés dans le cadre de mon cursus scolaire ou
            dans un cadre professionel.
          </h3>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-y-5 md:gap-y-16 relative">
            {projets.map((projet, index) => (
              <React.Fragment key={projet.id}>
                <ProjectCard {...projet} />
                {index < projets.length - 1 && (
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

export default Projects;
