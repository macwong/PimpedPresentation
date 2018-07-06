import React, {Component} from 'react';
import Slider from 'react-slick';

export default class SliderSection extends Component {
    constructor(props) {
        super(props);
    }

    renderBreadcrumbTitle(index) {
        switch(index) {
            case 0:
                return "Input";
            case 1:
                return "Find Face";
            case 2:
                return "Convert";
            case 3:
                return "Predict";
            default:
                return "Extra";
        }
    }

    render() {
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
            <div id={this.props.section} className={"slider-section " + this.props.cssClass}>
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

        );
    }
}