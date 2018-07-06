import React, {Component} from 'react';
import Globals from '../../js/globals';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={Globals.sectionIDs.welcome} className={"welcome-section " + this.props.cssClass}>
                <div className="wrapper">
                    <div className="item">
                        <div className="polaroid" onClick={this.props.onPolaroidClick}>
                            <div className="welcome-title">
                                Let's face it,<br />
                                Facial Recognition<br />
                                Is in your face
                            </div>
                            <img src="face.jpg" />
                            <div className="caption">Dave McCormick</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}