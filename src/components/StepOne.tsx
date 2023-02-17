import React from 'react';
import Tab from './Tab';

function StepOne() {
    return (
        <Tab id="step1" heading="Step 1">
            <>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Project Folder</label>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="customFile" />
                                <label className="custom-file-label" htmlFor="customFile">Select file</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>URL</label>
                            <input className="form-control" type="text" name="name" placeholder="Enter URL" />
                        </div>
                    </div>
                </div>
                <ul className="list-inline pull-right">
                    <li><button type="button" className="default-btn next-step">Upload</button></li>
                </ul>
            </>
        </Tab>
    );
}

export default StepOne;
