import React from 'react';
import Tab from './Tab';

function StepTwo() {
    return (
        <Tab id="step2" heading="Step 2">
            <>
                <div className="all-info-container">
                    <div className="list-content">
                        <a href="#listone" data-toggle="collapse" aria-expanded="false" aria-controls="listone">Image<i className="fa fa-chevron-down"></i></a>
                        <div className="collapse" id="listone">
                            <div className="list-box">
                                Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.
                            </div>
                        </div>
                    </div>
                    <div className="list-content">
                        <a href="#listtwo" data-toggle="collapse" aria-expanded="false" aria-controls="listtwo">Colour<i className="fa fa-chevron-down"></i></a>
                        <div className="collapse" id="listtwo">
                            <div className="list-box">
                                This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.01:1. Recommendation:  change background to #008856.
                            </div>
                        </div>
                    </div>
                    <div className="list-content">
                        <a href="#listthree" data-toggle="collapse" aria-expanded="false" aria-controls="listthree">Text<i className="fa fa-chevron-down"></i></a>
                        <div className="collapse" id="listthree">
                            <div className="list-box">
                                This form field should be labelled in some way.
                                Use the label element (either with a "for" attribute or wrapped
                                around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.
                            </div>
                        </div>
                    </div>
                </div>

            </>
        </Tab>
    );
}

export default StepTwo;
