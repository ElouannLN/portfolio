import { parcoursScolaire } from "../data/parcours/school";
import { parcoursPro } from "../data/parcours/pro";
import ParcoursCard from "../components/Cards/ParcoursCard";

function Course() {
  return (
    <>
      <section
        id="course"
        className="min-h-[50vh] flex justify-center p-4 pt-[5vh] pb-[5vh]"
      >
        <div className="w-full max-w-7xl flex flex-col items-center relative">
          <div className="hidden w-full md:flex flex-col md:flex-row justify-between md:gap-x-12 mt-10 px-4">
            <h2 className="text-4xl font-bold font-darumadrop text-center flex-1">
              Mon parcours scolaire...
            </h2>
            <div className="hidden md:block w-[3px]" />
            <h2 className="text-4xl font-bold font-darumadrop text-center flex-1">
              ...et professionnel !
            </h2>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:gap-x-12 mt-10">
            <div className="flex-1">
              <h2 className="md:hidden block text-4xl font-darumadrop font-bold text-center mb-[5vh] flex-1">
                Mon parcours scolaire...
              </h2>
              <ParcoursCard items={parcoursScolaire} />
            </div>

            <div
              className="
                w-[90%] h-[3px] bg-orange-300 my-8 md:my-0 md:mx-4
                md:w-[3px] md:h-[100%]
                rounded-full
              "
            />

            <div className="flex-1">
              <h2 className="md:hidden block text-4xl font-darumadrop font-bold text-center mb-[5vh] flex-1">
                ...et professionnel !
              </h2>
              <ParcoursCard items={parcoursPro} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Course;
