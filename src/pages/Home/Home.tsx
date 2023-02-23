import React, { useState } from 'react';
import StepFour from '../../components/StepFour';
import StepOne from '../../components/StepOne';
import StepTwo from '../../components/StepTwo';
import Wizard from '../../components/Wizard';
import './styles/Home.scss';

function Home() {
    const [currentStep, setCurrentStep] = useState(1)
    const stepArr = [
        { stepNo: 1, element: <StepOne setCurrentStep={setCurrentStep} /> },
        { stepNo: 2, element: <StepTwo setCurrentStep={setCurrentStep} /> },
        { stepNo: 3, element: <StepFour /> },
    ]

    return (
        <section className="checker-container">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div >
                        <div className="wizard">
                            <Wizard setCurrentStep={setCurrentStep} currentStep={currentStep} />
                            <form action="index.html" className="login-box">
                                <div className="tab-content" id="main_form">
                                    <>
                                        {stepArr.find(step => step.stepNo === currentStep)?.element}
                                        <div className="clearfix"></div>
                                    </>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Home;
