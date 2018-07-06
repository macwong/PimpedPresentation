import React, {Component} from 'react';
import SliderSection from './slidersection';
import NavMenu from './navmenu';
import Globals from '../../js/globals';
import Helpers from '../../js/helpers';
import Welcome from './welcome';

export default class PimpedMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            currentSection: Globals.sectionIDs.welcome,
            currentTitle: ""
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
        const section = e.currentTarget.dataset.section;
        const showTitle = Helpers.ToBoolean(e.currentTarget.dataset.showtitle);
        let title = e.currentTarget.dataset.title;
        
        if (!showTitle) {
            title = "";
        }

        this.setState({
            isOpen: false,
            currentSection: section,
            currentTitle: title
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
                        <Welcome
                            section={Globals.sectionIDs.welcome}
                            cssClass={this.showHideSection(Globals.sectionIDs.welcome)}
                            onPolaroidClick={this.onPolaroidClick}
                        />
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