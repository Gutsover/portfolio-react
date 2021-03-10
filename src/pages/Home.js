import React from "react";
import Navigation from "../components/Navigation";
import Pdf from "../media/CV_2021_MV.pdf";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Mylène Vandaële</h1>
          <h2>Intégratrice & développeuse front-end</h2>
          <h5> <i class="fas fa-map-marker-alt"></i> Lille, France</h5>
          <div className="presentation">
            <p>
              <span>"</span> Issue d'une carrière fructueuse dans le commerce,
              j'ai pris la route de la reconversion en 2018.
            </p>
            <p>
              Au cours de mon apprentissage autodidacte et de mes formations
              diverses (WebForce3, Aston...) mon talent s'est révélé dans la
              créativité, le désir de réaliser des interfaces ergonomiques,
              fluides, intuitives à l'utilisateur. Html, Css, Sass, Javascript
              sont devenus mes meilleurs atouts.
            </p>
            <p>
              Par ailleurs, dès début avril 2021, je pourrais agrémenter mon cv de
              ma future certification Opquast, témoignant mon souhait de
              m'orienter vers une expertise UI/UX.
            </p>
            <p>
              Mon savoir-faire en intégration n'a d'égal que ma curiosité pour tous
              les frameworks JS tel que Angular, Vue.JS ou encore React.
              <span>"</span>
            </p>
          </div>
          <div className="pdf">
            <a href={Pdf} target="_blank" rel="noreferrer">
              Télécharger le CV en PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
