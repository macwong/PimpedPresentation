import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import Globals from '../js/globals';
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
        this.props.onMenuClick(e.currentTarget.dataset);
    }

    updateIsOpen(state) {
        this.props.updateMenuIsOpen(state.isOpen);
    }

    highlightSection(key) {
        return this.props.currentKey === key ? "selected" : "";
    }

    render() {
        const sections = [
            { key: "Welcome", title: "Welcome", section: Globals.sectionIDs.welcome, showTitle: false },
            { key: "About", title: "About", section: Globals.sectionIDs.about, showTitle: true },
            { key: "Contact", title: "Contact", section: Globals.sectionIDs.contact, showTitle: true },
            { key: "Stuff", title: "Stuff", section: Globals.sectionIDs.stuff, showTitle: true },
            { key: "Blah", title: "Blah", section: Globals.sectionIDs.welcome, showTitle: false }
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
                                        className={this.highlightSection(section.key)} 
                                        key={section.key}
                                        href="#" 
                                        onClick={this.onMenuClick}
                                        data-key={section.key}
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