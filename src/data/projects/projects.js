import Adapei56_Logo from "/Adapei56_Logo.png";
import BEGA_Plus_Logo from "/BEGA_Plus_Logo.png";
import Mimir_Logo from "/Mimir_Logo.svg";

const projets = [
  {
    id: 1,
    titre: "Application ADAPEI-56",
    image: Adapei56_Logo,
    description:
      "<i>Dans le cadre du projet final de DUT Informatique et en lien direct avec l'association ADAPEI-56 venant en aide aux personnes en situation de handicap.</i></br></br>Application mobile permettant à des personnes en situation de handicap de se rendre à une localisation de manière autonome. L'application impliquait une gestion du danger, une bosolle intégrée, une synthèse vocale indiquant régulièrement les indications de trajets à respecter, ainsi qu'une gestion de l'accident (<i>Appel d'un numéro d'urgence ou numéro enregistré, ou envoi d'un SMS avec la position GPS</i>).</br></br>L'application était développée en Java sous Android Studio. Elle exploitait de nombreuses API et librairies publiques. Cette dernière disposait d'une gestion des secrets pour permettre à l'administrateur d'enregistrer des numéros d'urgence dans l'application et de paramétrer les différentes fonctions de l'outil.",
    langages:
      "Java, Android Studio, OpenStreetMap API et certaines librairies Android (Synthèse vocale, localisation/orientation et gestion des voix)",
  },
  {
    id: 2,
    titre: "BEGA / BEGA+",
    image: BEGA_Plus_Logo,
    description:
      "<i>Projet initié durant la seconde année d'études à l'ENSIBS, et poursuivit dans le cadre du projet de dernière année.</i></br></br>BEGA est à l'origine un outil permettant l'agrégation de données publiques (<i>disponibles librement sur internet</i>) à des fins d'audits d'entreprises. À partir d'un nom de domaine donné par l'utilisateur, il constitue un rapport et indique s'il y a présence de données sensibles et/ou d'adresses vulnérables.</br></br>Sa deuxième version, BEGA+, vient réaliser un audit interne à partir d'un second outil venant directement s'installer au sein du SI client. Ce dernier analyse les machines connectées et en réalise une cartographie complète, indiquant notamment les différents logiciels installés.</br></br>Une interface est disponible en ligne pour permettre aux administrateur de paramétrer les scans, et aux utilisateurs de lancer les scans externes et de consutler les rapports.",
    langages:
      "Scan externe : Python, nmap et les API Shodan, Qualys, Have I been pwned? </br></br>Scan interne : Flask, Greenbon OpenVAS</br></br>Pour l'interface web : Django, gestion d'une base de données chiffrée (SQLite), gestion des droits utilisateurs",
  },
  {
    id: 3,
    titre: "MIMIR",
    image: Mimir_Logo,
    description:
      "<i>Projet réalisé dans le cadre du \"Projet de fins d'études\" de mon cursus à l'ENSIBS. Ce dernier a été réalisé au sein du Crédit Mutuel ARKEA.</i></br></br>Outil de gestion de rapports pour les utilisateurs du SI de l'entreprise. Les utilisateurs authentifiés ont accès à la liste des rapports de leurs équipes et peuvent les télécharger. Le téléchargement d'un rapport entrainant l'apposition d'une \"<i>watermark</i>\" sur ce dernier qui comprend l'adresse mail et l'identifiant de l'utilisateur.</br></br>Les utilisateur habilités peuvent demander d'octroyer l'accès à un rapport à d'autres utilisateurs via une demande soumise à validation.</br></br>Les administrateurs peuvent envoyer et mettre à jour des rapports sur l'application. Toutes les actions effectuées sur l'application sont journalisées.",
    langages:
      "Java, Spring/Spring boot et surcouche interne ARKEA, Création d'endpoint API Rest, DAO, Services. Utilisation de JCBD (Base de données MySQL), gestion des secrets, gestion des accès utilisateurs (JWT), liaison cloud (S3), mise en place de batteries de test.",
  },
];

export default projets;
