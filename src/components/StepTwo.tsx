import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import Tab from './Tab';

const renderAccordion = (
    name: string,
    body: string,
    id: string
) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${id}`}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="true" aria-controls={`collapse${id}`}>
                    {name}
                </button>
            </h2>
            <div id={`collapse${id}`} className="accordion-collapse collapse show" aria-labelledby={`heading${id}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {body}
                </div>
            </div>
        </div>
    )
}
function StepTwo() {
    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 3000)
    return (
        <Tab id="step2" heading="Step 2">
            <>
                {/* todo: set interval and then render errors  */}
                {isLoading ?
                    <ProgressBar />
                    :
                    <div className="accordion" id="accordionExample">
                        {renderAccordion(
                            'Image',
                            'Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.',
                            'listone'
                        )}
                        {renderAccordion(
                            'Colour',
                            'This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.01:1. Recommendation:  change background to #008856.',
                            'listtwo'
                        )}
                        {renderAccordion(
                            'Text',
                            'This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.',
                            'listthree'
                        )}
                    </div>
                }

            </>
        </Tab>
    );
}

export default StepTwo;
