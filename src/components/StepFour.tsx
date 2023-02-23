import React from 'react';
import Tab from './Tab';

function StepFour() {
    return (
        <Tab id="step4" heading="Step 3">
            <>
                <div className="row">
                    <div className='col'>
                        <i className="bi bi-box-arrow-down "></i>
                        Your fixed folder is ready for download.
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <button type="button" className="btn btn-primary ">
                            Download fixed folder
                            <a href="path_to_log_file" download="log_file_name"></a>
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className='col'>

                        <button type="button" className="btn btn-primary col">
                            Download log file
                            <a href="path_to_log_file" download="log_file_name"></a>
                        </button>
                    </div>
                </div>

            </>
        </Tab>
    );
}
export default StepFour;