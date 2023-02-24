import React, { useState } from 'react';
import Tab from './Tab';
import './styles/StepOne.scss';

type StepOneProps = {
    setCurrentStep: Function;
}

function StepOne({ setCurrentStep }: StepOneProps) {
    const [selectedTech, setSelectedTech] = useState<string>('');

    const handleTechClick = (tech: string) => {
        setSelectedTech(tech);
        switch (tech) {
            case 'React':
                window.location.href = 'https://reactjs.org/';
                break;
            case 'Angular':
                window.location.href = 'https://angularjs.org/';
                break;
            case 'Salesforce':
                window.location.href = 'https://www.salesforce.com/in/';
                break;
            case 'Node.js':
                window.location.href = 'https://nodejs.org/';
                break;
            case 'Chart.js':
                window.location.href = 'https://www.chartjs.org/';
                break;
            case 'Docker':
                window.location.href = 'https://www.docker.com/';
                break;
            default:
                break;
        }

    };

    return (
        <Tab id="step1" heading="Step 1">
            <>
            <div style={{ fontSize: '26px', textAlign: 'center' }}>
  <b>Welcome to FiveO8</b><br></br>
  <sub>Which language would you like to work on</sub>
</div>
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-md-4">
                            <figure className="snip1577"  onClick={() => setCurrentStep(2)}>
                                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" alt="React" className="img-fluid" />
                                <figcaption>
                                    <h3>React</h3>
                                </figcaption>
                                       </figure>
                        </div>
                        <div className="col-md-4">
                            <figure className="snip1577" onClick={() => setCurrentStep(2)}>
                                <img src="https://wallpaperaccess.com/full/3910937.png" alt="Angular" className="img-fluid" />
                                <figcaption>
                                    <h3>Angular</h3>
                                </figcaption>
                              </figure>
                        </div>

                        <div className="col-md-4">
                            <figure className="snip1577" onClick={() => setCurrentStep(2)}>
                                <img src="https://martech.org/wp-content/uploads/2015/06/salesforce-logo-1920.jpg" alt="Salesforce" className="img-fluid" />
                                <figcaption>
                                    <h3>Salesforce</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <figure className="snip1577" onClick={() => setCurrentStep(2)}>
                                <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" alt="Node.js" className="img-fluid" />
                                <figcaption>
                                    <h3>Node.js</h3>
                                </figcaption>
                             </figure>
                        </div>
                        <div className="col-md-4">
                            <figure className="snip1577" onClick={() => setCurrentStep(2)} >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue.js" className="<img-fluid" style={{ width: '200px', height: '120px' }} />
                                <figcaption>
                                    <h3>Vue.js</h3>
                                </figcaption>

                            </figure>
                        </div>

                        <div className="col-md-4">
                            <figure className="snip1577" onClick={() => setCurrentStep(2)}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="php" className="img-fluid" />
                               <figcaption>
                                    <h3>PHP</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            
            </>
        </Tab>
    );
}

export default StepOne;
