import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import Globals from '../../js/globals';

export default class NavMenu extends Component {
    constructor(props) {
        super(props);
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
            >
                <div className="crosshair">
                    <nav className="link-effect-14" id="link-effect-14">
                        {  
                            sections.map((section) => {
                                return (
                                    <a
                                        className={this.props.highlightCallback(section.title)} 
                                        key={section.title} 
                                        href="#" 
                                        onClick={this.props.onOptionClick}
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