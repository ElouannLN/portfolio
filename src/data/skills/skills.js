import { Coffee, User } from "lucide-react";
import { Laptop } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { UserLock } from "lucide-react";
import { Package } from "lucide-react";
import { Handshake } from "lucide-react";
import { Medal } from "lucide-react";

const skills = [
  {
    titre: "Programmation",
    image: Coffee,
    skills: ["Java", "Python", "Kotlin", "Scripting Bash", "C++", "Assembleur"],
  },
  {
    titre: "Web",
    image: Laptop,
    skills: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "API REST",
      "vue.js",
      "PHP",
      "Node.js",
    ],
  },
  {
    titre: "Conception",
    image: NotebookPen,
    skills: [
      "Security By Design",
      "Diagramme UML / SysML",
      "Schémas relationnels",
      "Cahier des charges",
      "Cahier des tests",
      "Schémas d'architecture",
    ],
  },
  {
    titre: "Cybersécurité",
    image: ShieldCheck,
    skills: [
      "DevSecOps",
      "Pentest",
      "Durcissement",
      "OSINT",
      "Forensic",
      "Reverse",
    ],
  },
  {
    titre: "Gouvernance",
    image: UserLock,
    skills: [
      "Analyse de risque EBIOS",
      "Réalisation de campagnes de phishing",
      "Rédaction de PSSI / PCA / PRA",
      "Réalisation de cartographies SI",
      "Sensibilisation",
      "Veille cyber",
    ],
  },
  {
    titre: "Gestion de projets",
    image: Package,
    skills: [
      "Méthode AGILE",
      "CI/CD (Git, Docker...)",
      "Gantt",
      "Analyse des besoins",
      "RACI",
    ],
  },
  {
    titre: "Soft skills",
    image: Handshake,
    skills: [
      "Travail en équipe",
      "Animation de réunions",
      "Curiosité",
      "Volonté d'apprendre",
      "Ouverture d'esprit",
    ],
  },
  {
    titre: "Activités personnelles",
    image: Medal,
    skills: [
      "Badminton",
      "Vélo",
      "Escalade",
      "Dessin / Animation",
      "Programmation",
      "Cuisine",
    ],
  },
];

export default skills;
