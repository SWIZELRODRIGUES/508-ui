import React from 'react';
import Tab from './Tab';

type StepOneProps  ={
    setCurrentStep: Function;
}

function StepOne({setCurrentStep}:StepOneProps) {
    return (
        <Tab id="step1" heading="Step 1">
            <>
              
                <ul className="list-inline pull-right">
                    <li><button type="button" className={"btn btn-primary"} onClick={()=> setCurrentStep(2)}>Next</button></li>
                </ul>
            </>
        </Tab>
    );
}

export default StepOne;
