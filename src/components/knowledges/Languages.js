import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "HTML, Css, Sass", xp:2},
            {id: 2, value: "Javascript", xp:1.3},
            {id: 3, value: "Nodejs", xp:0.3}
        ],
        frameworks: [
            {id: 1, value: "Bootstrap", xp:2},
            {id: 2, value: "Angular9", xp:1},
            {id: 3, value: "Vue.js", xp:0.5},
            {id: 4, value: "React", xp:0.3}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="langages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="frameworks & bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;