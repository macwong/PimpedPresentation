import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Globals from '../../js/globals';
import {onPolaroidClick} from '../actions/actions';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.onPolaroidClick = this.onPolaroidClick.bind(this);
    }

    onPolaroidClick(e) {
        this.props.onPolaroidClick();
    }

    render() {
        return (
            <div id={Globals.sectionIDs.welcome} className={"welcome-section " + this.props.cssClass}>
                <div className="wrapper">
                    <div className="item">
                        <div className="polaroid" onClick={this.onPolaroidClick}>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onPolaroidClick }, dispatch);
}

export default connect(null, mapDispatchToProps)(Welcome);