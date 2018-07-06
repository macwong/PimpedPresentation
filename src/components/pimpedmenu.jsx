import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import SliderSection from './slidersection';

const sectionIDs = {
    home: "home",
    about: "about",
    contact: "contact",
    stuff: "stuff",
}

const sections = [
    { title: "Home", section: sectionIDs.home },
    { title: "About", section: sectionIDs.about },
    { title: "Contact", section: sectionIDs.contact },
    { title: "Stuff", section: sectionIDs.stuff },
    { title: "Blah", section: sectionIDs.home }
];

export default class PimpedMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            currentSection: sectionIDs.home,
            currentTitle: "Home"
        };

        this.onOptionClick = this.onOptionClick.bind(this);
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
                <Menu 
                    isOpen={this.state.isOpen}
                    pageWrapId={ "page-wrap" } 
                    outerContainerId={ "outer-container" }
                    width={350}
                >
                    <div className="crosshair section">
                        <nav className="link-effect-14" id="link-effect-14">
                            {  
                                sections.map((section) => {
                                    return (
                                        <a
                                            className={this.highlightSection(section.title)} 
                                            key={section.title} 
                                            href="#" 
                                            onClick={this.onOptionClick.bind(this)}
                                            data-section={section.section}
                                            data-title={section.title}
                                        >
                                            <span>{section.title}</span>
                                        </a>
                                    )
                                })
                            }    
                        </nav>
                    </div>
                </Menu>
                <main id="page-wrap">
                    <header>
                        <div className="title">{this.state.currentTitle}</div>
                    </header>
                    <section className="sections">
                        <div id={sectionIDs.home} className={"welcome-section " + this.showHideSection(sectionIDs.home)}>
                            <div className="wrapper">
                                <div className="item">
                                    <div className="polaroid">
                                    <img src="https://image.ibb.co/b8UJBc/administration_architecture_big_ben_221166.jpg" />
                                        <div className="caption">Dave McCormick</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={sectionIDs.about} className={this.showHideSection(sectionIDs.about)}>
                            About
                        </div>
                        <div id={sectionIDs.contact} className={this.showHideSection(sectionIDs.contact)}>
                            Contact
                        </div>

                        <SliderSection 
                            section={sectionIDs.stuff} 
                            cssClass={this.showHideSection(sectionIDs.stuff)}
                        />
                    </section>
                </main>
            </div>
        );
    }
}