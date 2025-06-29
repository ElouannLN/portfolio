import ActivityCard from "../components/Cards/ActivityCard";
import activities from "../data/activities/activities";

function Activities() {
  return (
    <>
      <section
        id="activities"
        className="min-h-[50vh] flex flex-col items-center pt-[5vh] pb-[5vh] px-4 p-4"
      >
        <h2 className="text-4xl font-darumadrop font-bold text-center mb-5 mt-10">
          Mes projets personnels :
        </h2>
        <h3 className="text-xl text-center italic mb-[5vh] md:mb-16">
          Différentes activités réalisées sur mon temps personnel, m'ayant
          permis de monter en compétences ou me tenant à cœur.
        </h3>
        <ul className="w-full max-w-[80%] space-y-5">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Activities;
