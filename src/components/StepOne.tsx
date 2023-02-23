import React from 'react';
import Tab from './Tab';
import './styles/StepOne.scss';

type StepOneProps = {
    setCurrentStep: Function;
}

function StepOne({ setCurrentStep }: StepOneProps) {
    const handleTechClick = (tech: string) => {
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
           
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-md-4">
                            <figure className="snip1577" onClick={() => handleTechClick('React')}>
                                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" alt="React" className="img-fluid" />
                                <figcaption>
                                    <h3>React</h3>
                                </figcaption>
                                <a href="https://reactjs.org/"></a>
                            </figure>
                        </div>
                        <div className="col-md-4">
                            <figure className="snip1577" onClick={() => handleTechClick('Angular')}>
                                <img src="https://wallpaperaccess.com/full/3910937.png" alt="Angular" className="img-fluid" />
                                <figcaption>
                                    <h3>Angular</h3>
                                </figcaption>
                                <a href="https://angularjs.org/"></a>
                            </figure>
                        </div>

                        <div className="col-md-4">
                            <figure className="snip1577" onClick={() => handleTechClick('Salesforce')}>
                                <img src="https://martech.org/wp-content/uploads/2015/06/salesforce-logo-1920.jpg" alt="Salesforce" className="img-fluid" />
                                <figcaption>
                                    <h3>Salesforce</h3>
                                </figcaption>
                                <a href="https://www.salesforce.com/in/"></a>
                            </figure>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <figure className="snip1577" onClick={() => handleTechClick('Node.js')}>
                                <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" alt="Node.js" className="img-fluid" />
                                <figcaption>
                                    <h3>Node.js</h3>
                                </figcaption>
                                <a href="https://nodejs.org/"></a>
                            </figure>
                        </div>
                        <div className="col-md-4">
                            <figure className="snip1577" onClick={() => handleTechClick('Chart.js')}>
                                <img src="https://www.chartjs.org/img/chartjs-logo.svg" alt="Chart.js" className="<img-fluid" />
                                <figcaption>
                                    <h3>Chart.js</h3>
                                </figcaption>
                                <a href="https://www.chartjs.org/"></a>
                            </figure>
                        </div>

                        <div className="col-md-4">
                            <figure className="snip1577" onClick={() => handleTechClick('MongoDB')}>
                                <img src="https://www.mongodb.com/assets/images/global/favicon.ico" alt="MongoDB" className="img-fluid" />
                               <figcaption>
                                    <h3>MongoDB</h3>
                                </figcaption>
                                <a href="https://www.mongodb.com/"></a>
                            </figure>
                        </div>
                    </div>
                </div>
                <ul className="list-inline pull-right">
                    <li><button type="button" className={"btn btn-primary"} onClick={() => setCurrentStep(2)}>Next</button></li>
                </ul>
            </>
        </Tab>
    );
}

export default StepOne;
