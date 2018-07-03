import React, {Component} from 'react';
import { push as Menu } from 'react-burger-menu';

export default class PimpedMenu extends Component {
  render () {
    return (
        <div id="outer-container">
            <Menu 
                pageWrapId={ "page-wrap" } 
                outerContainerId={ "outer-container" }
                width={350}
            >
                <div className="crosshair section">
                  <nav className="link-effect-14" id="link-effect-14">
                      <a href="#link-effect-14"><span>Introduction</span></a>
                      <a href="#link-effect-14"><span>Prototype Overview</span></a>
                      <a href="#link-effect-14"><span>Add Face</span></a>
                      <a href="#link-effect-14"><span>Other Stuff</span></a>
                      <a href="#link-effect-14"><span>Blah Blah</span></a>
                  </nav>
                </div>
            </Menu>
            <main id="page-wrap">
                <header>
                  <div class="title">This is a test</div>
                </header>
            </main>
        </div>
    );
  }
}