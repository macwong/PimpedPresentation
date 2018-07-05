import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import Slider from 'react-slick';

// https://github.com/negomi/react-burger-menu

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

    renderBreadcrumbTitle(index) {
        switch(index) {
          case 0:
            return 'Add Face';
          default:
            return 'This is a long test';
        }
    }

    render () {
        const settings = {
            customPaging: (i) => {
                return (
                    <a>
                        <span>{i + 1}</span>
                        <span className="breadcrumb-description">
                            {this.renderBreadcrumbTitle(i)}
                        </span>
                    </a>

                );
            },
            dots: true,
            dotsClass: "cf breadcrumbs inner",
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

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
                        <div id={sectionIDs.home} className={this.showHideSection(sectionIDs.home)}>
                            Home
                        </div>
                        <div id={sectionIDs.about} className={this.showHideSection(sectionIDs.about)}>
                            About
                        </div>
                        <div id={sectionIDs.contact} className={this.showHideSection(sectionIDs.contact)}>
                            Contact
                        </div>
                        <div id={sectionIDs.stuff} className={"stuff " + this.showHideSection(sectionIDs.stuff)}>
                            <div>
                                <Slider {...settings}>
                                    <div>
                                        <div className="box">
                                            <div className="row header">
                                                <p><b>header</b>
                                                <br />
                                                <br />(sized to content)</p>
                                            </div>
                                            <div className="row content">
                                                <p>
                                                <b>content</b>
                                                (fills remaining space)
                                                </p>
                                            </div>
                                            <div className="row footer">
                                                <p><b>footer</b> (fixed height)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        Test 2
                                    </div>
                                    <div>
                                        Test 3
                                    </div>
                                    <div>
                                        Test 4
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}