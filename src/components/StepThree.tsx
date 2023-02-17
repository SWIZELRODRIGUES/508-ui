import React from 'react';
import Tab from './Tab';

function StepThree() {
    return (
        <Tab id="step3" heading="Step 3">
            <>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">

                        </div>
                    </div>
                </div>
                <ul className="list-inline pull-right">
                    <li><button type="button" className="default-btn prev-step">Back</button></li>

                    <li><button type="button" className="default-btn next-step">Generate</button></li>
                </ul>
            </>
        </Tab>
    );
}

export default StepThree;
