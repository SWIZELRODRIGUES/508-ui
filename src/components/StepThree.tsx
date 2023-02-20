import React from 'react';
import ColorContrastChecker from './ColorContrastChecker';
import Tab from './Tab';

function StepThree() {
    return (
        <Tab id="step3" heading="Step 3">
            <>
                <ColorContrastChecker />
                <ul className="list-inline pull-right">
                    <li><button type="button" className="default-btn prev-step">Back</button></li>

                    <li><button type="button" className="default-btn next-step">Generate</button></li>
                </ul>
            </>
        </Tab>
    );
}

export default StepThree;
