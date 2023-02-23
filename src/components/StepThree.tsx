import React from 'react';
import { API_URL } from '../constant';

import Tab from './Tab';

function StepThree() {

    const handleDownload = async () => {
        const response = await fetch(`${API_URL}/download_zip`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'fixed_folder.zip');
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
    }

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
                        <button type="button" className="btn btn-primary " onClick={handleDownload}>
                            Download fixed folder
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className='col'>
                        <button type="button" className="btn btn-primary col" onClick={() => window.location.href = '/api/download_log'}>
                            Download log file
                        </button>
                    </div>
                </div>
            </>
        </Tab>
    );

}

export default StepThree;