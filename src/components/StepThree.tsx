import React from 'react';
import ColorContrastChecker from './ColorContrastChecker';
import Tab from './Tab';

type StepThreeProps  ={
    setCurrentStep: Function;
}

function StepThree({setCurrentStep}:StepThreeProps) {
    return (
        <Tab id="step3" heading="Step 3">
            <>
                <ColorContrastChecker />
                <ul className="list-inline pull-right">
                    <li><button type="button" className="btn btn-primary" onClick={()=>setCurrentStep(4)}>Generate</button></li>
                </ul>
            </>
        </Tab>
    );
}

export default StepThree;
