import React, { useState } from 'react';
import Tab from './Tab';
import './styles/StepOne.scss';
import angularIcon from '../assets/angular_icon.png';
import htmlIcon from '../assets/html5_icon.png';
import phpIcon from '../assets/php_icon.png';
import reactIcon from '../assets/react_icon.png';
import salesforceIcon from '../assets/salesforce_icon.png';
import vueIcon from '../assets/vue_icon.png';




type StepOneProps = {
    setCurrentStep: Function;
}

function StepOne({ setCurrentStep }: StepOneProps) {


    return (
        // <Tab id="step1" heading="Step 1">
            <div className="SectionDiv">
                <div><h2>Let's get started with your project</h2></div>
                <h4>Please select the Technology used?</h4>
                <div className="cartPanel">
                    <div className="techLogo">
                        <img src={angularIcon} alt="Angular Logo" />
                    </div>
                    <div className="techName">Angular Js</div>
                </div>
                <div className="cartPanel">
                    <div className="techLogo">
                        <img src={phpIcon} alt="PHP Logo" />
                    </div>
                    <div className="techName">PHP</div>
                </div>
                <div className="cartPanel">
                    <div className="techLogo">
                        <img src={htmlIcon} alt="HTML Logo" />
                    </div>
                    <div className="techName">HTML/CSS</div>
                </div>
                <div className="cartPanel">
                    <div className="techLogo">
                        <img src={reactIcon} alt="React Logo" />
                    </div>
                    <div className="techName">React Js</div>
                </div>
                <div className="cartPanel">
                    <div className="techLogo">
                        <img src={salesforceIcon} alt="Salesforce Logo" />
                    </div>
                    <div className="techName">Salesforce</div>
                </div>
                <div className="cartPanel">
                    <div className="techLogo">
                        <img src={vueIcon} alt="Vue Logo" />
                    </div>
                    <div className="techName">Vue JS</div>
                </div>
            </div>

        // </Tab>
    );
}

export default StepOne;
