import skills from "../data/skills/skills";
import SkillsCard from "../components/Cards/SkillsCard";

function Skills() {
  return (
    <>
      <section
        id="skills"
        className="min-h-[50vh] flex justify-center pt-[5vh] pb-[5vh] p-4"
      >
        <div className="flex flex-col items-center relative">
          <h2 className="text-4xl font-darumadrop font-bold text-center mb-5 mt-10">
            Compétences acquises :
          </h2>
          <h3 className="text-xl text-center italic mb-[5vh] md:mb-16">
            Liste des compétences acquises depuis le début de mon cursus
            scolaire et professionnel.
          </h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-8xl mx-auto">
            <SkillsCard items={skills} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
