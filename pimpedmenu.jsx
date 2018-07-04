import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';

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
            currentSection: sectionIDs.home
        };

        this.onOptionClick = this.onOptionClick.bind(this);
    }

    onOptionClick(e) {
        this.setState({
            isOpen: false,
            currentSection: e.currentTarget.dataset.section
        });
    }

    showHideSection(section) {
        return this.state.currentSection === section ? "" : "hidden";
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
                                            key={section.title} 
                                            href="#" 
                                            onClick={this.onOptionClick.bind(this)}
                                            data-section={section.section}
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
                        <div className="title">This is a test</div>
                    </header>
                    <div className="sections">
                        <div id={sectionIDs.home} className={this.showHideSection(sectionIDs.home)}>
                            Home
                        </div>
                        <div id={sectionIDs.about} className={this.showHideSection(sectionIDs.about)}>
                            About
                        </div>
                        <div id={sectionIDs.contact} className={this.showHideSection(sectionIDs.contact)}>
                            Contact
                        </div>
                        <div id={sectionIDs.stuff} className={this.showHideSection(sectionIDs.stuff)}>
                            Stuff
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}