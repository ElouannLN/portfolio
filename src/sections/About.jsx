import { Mail, Github, Linkedin } from "lucide-react";
import Elouann from "/Elouann.png";
import Me from "../data/text/about_me.json";
import Job from "../data/text/searching_job.json";

function About() {
  return (
    <>
      <section
        id="about"
        className="min-h-[50vh] flex items-start justify-center p-4 pt-[18vh] md:pt-[10vh] pb-[5vh]"
      >
        <div className="flex flex-col md:flex-row items-start w-full max-w-6xl gap-6">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="relative w-full bg-orange-300 rounded-lg shadow-lg flex flex-col items-center pt-24 pb-6 px-6">
              <div className="absolute -top-12 bg-white w-32 sm:w-40 md:w-48 lg:w-56 aspect-square rounded-full overflow-hidden border-7 border-white shadow-xl">
                <img
                  src={Elouann}
                  alt="Profil"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:mt-[100px] sm:mt-[20px] text-center w-full text-shadow-lg md:mt-15">
                <h1 className="text-white text-3xl font-bold">
                  LE NEZET Elouann
                </h1>
                <h2 className="text-white text-2xl">Développeur full-stack</h2>
                <h2 className="text-white text-1xl italic">
                  Ingénieur cybersécurité
                </h2>
              </div>
            </div>

            <div className="w-full border-l-5 border-orange-300 mt-4 rounded-lg p-4 flex flex-col items-start gap-4">
              <a
                href="https://www.linkedin.com/in/elouann-le-nezet/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-orange-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/ElouannLN/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-orange-300 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>

              <a
                href="mailto:elouann@example.com"
                className="flex items-center gap-2 text-black hover:text-orange-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>e.le-nezet@laposte.net</span>
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-6 rounded-lg shadow-lg text-left border-t-2 border-orange-300 md:border-none">
            <h1 className="text-4xl font-darumadrop font-bold">À propos de moi...</h1>
            <p
              className="mt-5 text-1xl text-justify"
              dangerouslySetInnerHTML={{ __html: Me.description }}
            />

            <div className="relative mt-8 p-4 rounded-lg border border-blue-400 bg-blue-100">
              <span className="absolute top-2 right-2 flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-blue-500"></span>
              </span>

              <h2 className="text-2xl font-semibold text-blue-800">
                Actuellement en recherche d'emploi !
              </h2>
              <p
                className="mt-2 text-blue-800 text-sm text-justify"
                dangerouslySetInnerHTML={{ __html: Job.description }}
              ></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
