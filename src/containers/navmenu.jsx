import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import Globals from '../../js/globals';
import { onMenuClick, updateMenuIsOpen } from '../actions/actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class NavMenu extends Component {
    constructor(props) {
        super(props);

        this.onMenuClick = this.onMenuClick.bind(this);
        this.updateIsOpen = this.updateIsOpen.bind(this);
        this.highlightSection = this.highlightSection.bind(this);
    }

    onMenuClick(e) {
        this.props.onMenuClick(e);
    }

    updateIsOpen(state) {
        this.props.updateMenuIsOpen(state.isOpen);
    }

    highlightSection(title) {
        console.log(this.props.currentTitle, title);
        return this.props.currentTitle === title ? "selected" : "";
    }

    render() {
        const sections = [
            { title: "Welcome", section: Globals.sectionIDs.welcome, showTitle: false },
            { title: "About", section: Globals.sectionIDs.about, showTitle: true },
            { title: "Contact", section: Globals.sectionIDs.contact, showTitle: true },
            { title: "Stuff", section: Globals.sectionIDs.stuff, showTitle: true },
            { title: "Blah", section: Globals.sectionIDs.welcome, showTitle: false }
        ];

        return (
            <Menu 
                isOpen={this.props.isOpen}
                pageWrapId={ "page-wrap" } 
                outerContainerId={ "outer-container" }
                width={350}
                onStateChange={this.updateIsOpen}
            >
                <div className="crosshair">
                    <nav className="link-effect-14" id="link-effect-14">
                        {  
                            sections.map((section) => {
                                return (
                                    <a
                                        className={this.highlightSection(section.title)} 
                                        key={section.title} 
                                        href="#" 
                                        onClick={this.onMenuClick}
                                        data-section={section.section}
                                        data-title={section.title}
                                        data-showtitle={section.showTitle}
                                    >
                                        <span>{section.title}</span>
                                    </a>
                                )
                            })
                        }    
                    </nav>
                </div>
            </Menu>
        );
    }
}

function mapStateToProps(state) {
    return state.menu;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onMenuClick, updateMenuIsOpen }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);