import React from 'react';

type WizardProps = {
    setCurrentStep: Function;
}

// const renderStep = ()=>{
//     return
// }
function Wizard(props: WizardProps) {
    const { setCurrentStep } = props;
    return (
        <div className="wizard-inner">
            <div className="connecting-line"></div>
            <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active" onClick={()=> setCurrentStep(1)}>
                    <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" aria-expanded="true"><span className="round-tab">1 </span> <i>Step 1</i></a>
                </li>
                <li role="presentation" className="disabled" onClick={()=> setCurrentStep(2)}>
                    <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" aria-expanded="false"><span className="round-tab">2</span> <i>Step 2</i></a>
                </li>
                <li role="presentation" className="disabled" onClick={()=> setCurrentStep(3)}>
                    <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab"><span className="round-tab">3</span> <i>Step 3</i></a>
                </li>
                <li role="presentation" className="disabled" onClick={()=> setCurrentStep(4)}>
                    <a href="#step4" data-toggle="tab" aria-controls="step4" role="tab"><span className="round-tab">4</span> <i>Step 4</i></a>
                </li>
            </ul>
        </div>
    );
}

export default Wizard;
