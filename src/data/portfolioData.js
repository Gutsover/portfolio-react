import Pst from "../media/project1.png";
import Vitodoc from "../media/project2.png";
import Quasargram from "../media/project3.png";
import Tuto from "../media/project4.png";
import Portfolio from "../media/project5.png";
import Quizz from "../media/project6.png";

export const portfolioData = [
  {
    id: 1,
    name: "Pôle Santé Travail, rapport d'activité",
    languages: ["react", "css&javascript"],
    languagesIcons: ["fab fa-react", "fab fa-js", "fab fa-css3-alt"],
    source: "https://github.com/Gutsover/project-mama",
    info:
      "Projet réalisé sous 2 semaines dans le cadre de la formation Web Force 3. Le but ? \"Condenser\" un rapport d'activité de l'année 2017/18 du Pôle Santé Travail (pdf d'une centaine de pages) en application attractive et dynamique. Mon rôle dans ce projet de groupe (4personnes) a été de travailler la maquette, le style, les animations, la création des multiples composants et leur intégration.",
    picture: Pst,
  },
  {
    id: 2,
    name: "Vitodoc",
    languages: ["angular", "css&javascript"],
    languagesIcons: ["fab fa-angular", "fab fa-js", "fab fa-css3-alt"],
    source: "https://vitodoc.fr/",
    info:
      "Un travail de responsive entière pour l'adaptabilité mobile, j'ai dû m'approprier le code existant (projet sous Angular 9) afin de résoudre les incohérences, défauts visibles de design, corriger les bugs et ajouter de nouvelles fonctionnalités. Cette mission a duré 2 mois, j'ai travaillé en solitaire et totale autonomie. J'y aurait apprit énormément et suis fière d'avoir contribué à la réalisation de ce projet chez Ineat, aujourd'hui en ligne et fonctionnel !",
    picture: Vitodoc,
  },
  {
    id: 3,
    name: "Quasargram",
    languages: ["vuejs", "css&javascript"],
    languagesIcons: ["fab fa-vuejs", "fab fa-js", "fab fa-css3-alt"],
    source: "https://github.com/Gutsover/instagram-clone",
    info:
      "Autodidacte, Les frameworks JS m'intéressent tout particulièrement. Je me forme donc à Vue.JS, trés demandé, accessible et simple à mettre en place, je me suis aussi penchée de près sur son propre framerwork : Quasar, en réalisant ce clone de l'interface \"Instagram\". Une fantastique découverte qui me pousse à vouloir continuer mes tests avec !",
    picture: Quasargram,
  },
  {
    id: 4,
    name: "Tuto Codepen",
    languages: ["css&javascript"],
    languagesIcons: ["fab fa-js", "fab fa-css3-alt"],
    source: "https://codepen.io/Mylene-V",
    info:
      "Expériences diverses et créations autodidactes à base de Css/Sass, keyframes et Javascript. Codepen est pour moi une source d'inspiration et d'aide infinie! J'aime y partager quelques projets réutilisables et pouvant servir de support à de nombreuses personnes en apprentissage.",
    picture: Tuto,
  },
  {
    id: 5,
    name: "Portfolio",
    languages: ["react", "css&javascript"],
    languagesIcons: ["fab fa-react", "fab fa-js", "fab fa-css3-alt"],
    source: "http://www.github.com",
    info:
      "Ce portfolio à sa place dans ma modeste liste de projets. J'ai fait le choix de le réaliser avec React, outre la rapidité que cela offre au contenu, je n'aurais eu que rarement l'occasion de travailler avec ce langage et je souhaitais me remettre à jour. J'ai beaucoup apprécié travailler avec ce framework et souhaite y consacrer plus de temps.",
    picture: Portfolio,
  },
  {
    id: 6,
    name: "Quizz JS",
    languages: ["css&javascript"],
    languagesIcons: ["fab fa-js", "fab fa-css3-alt"],
    source: "https://codepen.io/Mylene-V/pen/vYLweZg",
    info:
      "Petit projet personnel, toujours dans le but d'apprendre et découvrir, mettant en scène un quizz dynamique sur Javascript réalisé en... Javascript !",
    picture: Quizz,
  },
];
