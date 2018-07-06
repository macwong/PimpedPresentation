import React, {Component} from 'react';
import SliderSection from './slidersection';
import NavMenu from './navmenu';
import Globals from '../../js/globals';

export default class PimpedMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            currentSection: Globals.sectionIDs.home,
            currentTitle: "Home"
        };

        this.highlightSection = this.highlightSection.bind(this);
        this.showHideSection = this.showHideSection.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
        this.onPolaroidClick = this.onPolaroidClick.bind(this);
    }

    onPolaroidClick(e) {
        this.setState({
            isOpen: true
        });
    }

    onOptionClick(e) {
        this.setState({
            isOpen: false,
            currentSection: e.currentTarget.dataset.section,
            currentTitle: e.currentTarget.dataset.title
        });
    }

    showHideSection(section) {
        return this.state.currentSection === section ? "" : "hidden";
    }

    highlightSection(title) {
        return this.state.currentTitle === title ? "selected" : "";
    }

    render () {
        return (
            <div id="outer-container">
                <NavMenu
                    isOpen={this.state.isOpen}
                    highlightCallback={this.highlightSection}
                    onOptionClick={this.onOptionClick}
                />
                <main id="page-wrap">
                    <header>
                        <div className="title">{this.state.currentTitle}</div>
                    </header>
                    <section className="sections">
                        <div id={Globals.sectionIDs.home} className={"welcome-section " + this.showHideSection(Globals.sectionIDs.home)}>
                            <div className="wrapper">
                                <div className="item">
                                    <div className="polaroid" onClick={this.onPolaroidClick}>
                                        <div className="welcome-title">
                                            Let's face it,<br />
                                            Facial Recognition<br />
                                            Is in your face
                                        </div>
                                        <img src="https://image.ibb.co/b8UJBc/administration_architecture_big_ben_221166.jpg" />
                                        <div className="caption">Dave McCormick</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={Globals.sectionIDs.about} className={this.showHideSection(Globals.sectionIDs.about)}>
                            About
                        </div>
                        <div id={Globals.sectionIDs.contact} className={this.showHideSection(Globals.sectionIDs.contact)}>
                            Contact
                        </div>

                        <SliderSection 
                            section={Globals.sectionIDs.stuff} 
                            cssClass={this.showHideSection(Globals.sectionIDs.stuff)}
                        />
                    </section>
                </main>
            </div>
        );
    }
}