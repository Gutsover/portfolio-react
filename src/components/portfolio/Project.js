import React, { Component } from "react";

export default class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3 onClick={this.handleInfo} title="Cliquez pour plus d'informations">{name}</h3>
        <img src={picture} alt="" onClick={this.handleInfo} title="Cliquez pour plus d'informations" />

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    Code source
                  </a>
                </div>
              </div>

              <p className="text">{info}</p>

              <div className="button return" onClick={this.handleInfo}>
                Retour
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
