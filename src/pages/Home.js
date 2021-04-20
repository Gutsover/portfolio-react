import React from "react";
import Navigation from "../components/Navigation";
import Pdf from "../media/CV_2021_MV.pdf";
import Opquast from "../media/opquast.pdf";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Mylène Vandaële</h1>
          <h2>Intégratrice & développeuse front-end</h2>
          <h5>
            {" "}
            <i class="fas fa-map-marker-alt"></i> Lille, 59000 - France
          </h5>
          <div className="presentation">
            <p>
              <span>"</span> Issue d'une carrière fructueuse dans le commerce,
              j'ai pris la route de la reconversion en 2018.
            </p>
            <p>
              Au cours de mon apprentissage autodidacte et de mes formations
              diverses (WebForce3, Aston...) mon talent s'est révélé dans la
              créativité, le désir de réaliser des interfaces ergonomiques,
              fluides, intuitives à l'utilisateur. Html, Css, Sass et Javascript
              sont devenus mes meilleurs atouts.
            </p>
            <p>
              Je projette de m'orienter vers une expertise UI/UX. Je dispose par ailleurs de
              la certification décernée par Opquast, niveau 'avancé', depuis le 19 avril 2021 :
              <div className="opquast">
                <a href={Opquast} target="_blank" rel="noreferrer" title="Format PDF, 252Ko">
                  Certificat Opquast, Maîtrise de la qualité en projet Web
                </a>
              </div>
            </p>
            <p>
              Mon savoir-faire en intégration n'a d'égal que ma curiosité pour
              tous les frameworks JS tel que Angular, Vue.JS ou encore React.
              <span>"</span>
            </p>
          </div>
          <div className="pdf">
            <a href={Pdf} target="_blank" rel="noreferrer" title="Format PDF, 209Ko">
              Télécharger le CV en PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
