import React, { ReactElement } from 'react';
import Tab from './Tab';

const renderFormInputColumn = (element: ReactElement) => {
    return (
        <div className="col-md-6">
            <div className="form-group">
                {element}
            </div>
        </div>
    )
}
function StepOne() {
    return (
        <Tab id="step1" heading="Step 1">
            <>
                <div className="row">
                    {renderFormInputColumn(
                        <>
                            <label htmlFor="formFile" className="form-label">File</label>
                            <div className="custom-file">
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                        </>
                    )}
                    {renderFormInputColumn(
                        <>
                            <label className="form-label" htmlFor='formUrl'>URL</label>
                            <input className="form-control" type="text" name="name" placeholder="Enter URL" id="formUrl" />
                        </>
                    )}
                </div>
                <ul className="list-inline pull-right">
                    <li><button type="button" className="default-btn next-step">Upload</button></li>
                </ul>
            </>
        </Tab>
    );
}

export default StepOne;
