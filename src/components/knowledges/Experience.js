import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expériences</h3>
            <div className="exp-1">
                <h4>Intégratrice & développeuse front-end - Ineat, Lille</h4>
                <h5>2019-2020</h5>
                <p>Correctifs de typescript sur Angular 8 et gros travail d'adaption responsive de l'ensemble de vitodoc.fr.
                Travail "d'allègement" du site officiel INEAT, principalement sur les médias importés et assez lourds. Utilisation de photoshop.
                Intégration sur Prestashop</p>
            </div>

            <div className="exp-2">
                <h4> Formation de développeur full-stack - Ecole Aston, Lille</h4>
                <h5>2019</h5>
                <p>Front-end : HTML, CSS, Javascript, Angular 8</p>
                <p>Back-end : NodeJS, PHP & Symfony</p>
                <p>Database : MySQL, NoSQL (MongoDB)</p>
                <p>Autres : méthode Agile & Scrum, Git & Github</p>
            </div>
            <div className="exp-3">
                <h4> Formation de développeur full-stack - WebForce3, Lille</h4>
                <h5>2018</h5>
                <p>Front-end : HTML, CSS, Bootstrap, Javascript, JQuery</p>
                <p>Back-end : PHP, Symfony</p>
                <p>Database : MySQL</p>
                <p>CMS : Wordpress, Prestashop</p>
            </div>
        </div>
    );
};

export default Experience;