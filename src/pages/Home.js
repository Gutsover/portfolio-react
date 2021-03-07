import React from "react";
import Navigation from "../components/Navigation";
import Pdf from "../media/mylene_vandaele_cv_maj_2021.pdf";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Mylène Vandaële</h1>
          <h2>Intégratrice & développeuse front-end</h2>
          <div className="presentation">
            <p>
              <span>"</span> Issue d'une carrière fructueuse dans le commerce,
              j'ai pris la route de la reconvertion en 2018.
            </p>
            <p>
              Au cours de mon apprentissage autodidacte et de mes formations
              diverses (WebForce3, Aston...) mon talent s'est révélé dans la
              créativité, le désir de créer des interfaces ergonomiques,
              fluides, intuitives à l'utilisateur. Html, Css, Sass, Javascript
              sont devenus mes meilleurs atouts.
            </p>
            <p>
              Mon expertise en intégration n'a d'égal que ma curiosité pour tous
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
