import React, {Component} from 'react';
import { push as Menu } from 'react-burger-menu';

export default class PimpedMenu extends Component {
  showSettings (event) {
    // event.preventDefault();
  }

  render () {
    return (
        <div id="outer-container">
            <Menu isOpen={ true } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
                <section className="color-9">
                  <nav className="cl-effect-9">
                    <a href="#"><span>Gossamer</span><span>Sumptuous Heart</span></a>
                    <a href="#"><span>Ineffable</span><span>Evanescent Life</span></a>
                    <a href="#"><span>Chatoyant</span><span>Assemblage Love</span></a>
                    <a href="#"><span>Mellifluous</span><span>Mellifluous Will</span></a>
                    <a href="#"><span>Serendipity</span><span>Serendipity Cut</span></a>
                  </nav>
                </section>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
            <main id="page-wrap">
                <div>This is a test</div>
            </main>
        </div>
    );
  }
}