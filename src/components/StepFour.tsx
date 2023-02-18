import React from 'react';
import Tab from './Tab';

function StepFour() {
    return (
        <Tab id="step4" heading="Step 4">
            <>
            <i className="bi bi-box-arrow-down"></i>
            {/* todo: update href + file name to be dynamic */}
            Your fixed folder is ready for download <a href="path_to_file" download="proposed_file_name">here</a>
            {/* todo: add time it took to create the fixed folder */}
            </>

        </Tab>
    );
}

export default StepFour;
