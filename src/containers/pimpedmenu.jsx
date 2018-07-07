import React, {Component} from 'react';
import { connect } from 'react-redux'
import SliderSection from '../components/slidersection';
import NavMenu from '../containers/navmenu';
import Globals from '../js/globals';
import Welcome from '../containers/welcome';

class PimpedMenu extends Component {
    constructor(props) {
        super(props);

        this.showHideSection = this.showHideSection.bind(this);
    }

    showHideSection(section) {
        return this.props.currentSection === section ? "" : "hidden";
    }

    render () {
        return (
            <div id="outer-container">
                <NavMenu />
                <main id="page-wrap">
                    <header>
                        <div className="title">{this.props.currentTitle}</div>
                    </header>
                    <section className="sections">
                        <Welcome cssClass={this.showHideSection(Globals.sectionIDs.welcome)} />
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

function mapStateToProps(state) {
    return { 
        currentSection: state.menu.currentSection, 
        currentTitle: state.menu.currentTitle 
    };
}

export default connect(mapStateToProps)(PimpedMenu);