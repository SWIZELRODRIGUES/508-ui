// @ts-nocheck
import React, { ReactElement, useState } from 'react';
import { API_URL } from '../constant';
import ColorContrastIssue from './ColorContrastIssue';
import ImageAltIssue from './ImageAltIssue';
import './styles/StepTwo.scss'
import Loader from './Loader';
import { BounceLoader } from 'react-spinners';


type StepTwoProps = {
    setCurrentStep: Function;
}

const renderFormInputColumn = (element: ReactElement) => {
    return (
        <div className="col-md-6">
            <div className="form-group">
                {element}
            </div>
        </div>
    )
}

const renderTabContent = (activeTab, accessibilityErrors, errorData, tab) => {
    switch (activeTab) {
        case 1:
            return accessibilityErrors?.filter((error: any) => !tab.excludeError?.includes(error.id))?.flatMap(
                (error: any) => error.nodes
            )
                ?.flatMap((error: any) => error.failureSummary)?.map((error: any) =>
                    <li >{error?.split('Fix any of the following:')[1]}
                    </li>
                )

        case 2:
            return <ImageAltIssue imageData={errorData ? errorData['img_alt'] : null} />

        case 3:
            return <ColorContrastIssue contrastData={errorData ? errorData['color_contrast'] : null} />

    }
}

function StepTwo({ setCurrentStep }: StepTwoProps) {
    const [sourceFolder, setSourceFolder] = useState<File | null>(null);
    const [hostURL, setHostURL] = useState("");
    const [showLoader, setShowLoader] = useState(false)
    const [showSubmitLoader, setShowSubmitLoader] = useState(false)
    const [showTabs, setShowTabs] = useState(false)
    const [accessibilityErrors, setAccessibilityErrors] = useState<any>(
    );
    const [errorData, setErrorData] = useState(
        { "img_alt": { "angular-demo\\src\\app\\app.component.html": { "img-alt": [{ "sourceline": 12, "selector": "img[src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Arduino_ftdi_chip-1.jpg/1024px-Arduino_ftdi_chip-1.jpg\"]", "old_value": null, "new_value": "Smartphone", "issue": "img tag missing alt attribute" }, { "sourceline": 13, "selector": "img[src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Audion_receiver.jpg/1024px-Audion_receiver.jpg\"]", "old_value": null, "new_value": "Smartphone", "issue": "img tag missing alt attribute" }, { "sourceline": 14, "selector": "img[src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Componentes.JPG/1280px-Componentes.JPG\"]", "old_value": null, "new_value": "Smartphone", "issue": "img tag missing alt attribute" }, { "sourceline": 15, "selector": "img[src=\"https://upload.wikimedia.org/wikipedia/commons/3/32/HitachiJ100A.jpg\"]", "old_value": null, "new_value": "Smartphone", "issue": "img tag missing alt attribute" }] }, "angular-demo\\src\\index.html": { "img-alt": [] } }, "color_contrast": { "angular-demo\\src\\app\\app.component.css": [{ "selector": "button", "current_colors": { "color": "#f0f8ff", "background-color": "#8a2be2" }, "suggested_colors": { "color": "#ffffff", "background-color": "#000000" } }, { "selector": ".navbar", "current_colors": { "color": "#f5f5dc", "background-color": "#00008b" }, "suggested_colors": { "color": "#ffffff", "background-color": "#000000" } }, { "selector": "#brand", "current_colors": { "color": "#a52a2a", "background-color": "#7fffd4" }, "suggested_colors": { "color": "#ffffff", "background-color": "#000000" } }], "angular-demo\\src\\styles.css": [] } }
    )
    const [activeTab, setActiveTab] = useState(1)
    const tabs = [
        { id: 1, tabName: 'HTML Issues', tabIdentifier: 'deprecated', excludeError: ['image-alt', 'color-contrast'] },
        { id: 2, tabName: 'Image Issues', tabIdentifier: 'alt' },
        { id: 3, tabName: 'Color Contrast Issues', tabIdentifier: 'color' },
    ]
    const handleSourceFolderUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSourceFolder(event.target.files ? event.target.files[0] : null);
    };

    const handleHostURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHostURL(event.target.value);
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        // Send the source folder and host URL to the backend API to get accessibility errors
        setShowSubmitLoader(true)
        setShowTabs(false)
        const formData = new FormData();
        formData.append("files", sourceFolder || '');
        await fetch(`${API_URL}/upload_zip`, {
            method: "POST",
            body: formData,
        });

        const response = await fetch(`${API_URL}/issues?url=${hostURL}`, {
            method: "GET",
        })
        const data = await response.json();
        // Set the accessibility errors and their categories in the state
        setAccessibilityErrors(data);


        const errorData = await fetch(`${API_URL}/suggest_changes`, {
            method: "GET"
        })
        const contrastImageErrorData = await errorData.json();
        setErrorData(contrastImageErrorData)

        await fetch(`${API_URL}/fix_all`, {
            method: "POST",
        })
        setShowSubmitLoader(false)
        setShowTabs(true)

    };


    const handleFixAll = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setShowLoader(true)

        await fetch(`${API_URL}/update_changes`, {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(errorData),
        });

        setTimeout(() => {
            setShowLoader(false)
            setCurrentStep(3)
        }, 4000)

    };

    return (
        <div className='step-two'>
            {showLoader &&
                <Loader />}
            {!showTabs && <div className=" user-input-form">
                <div className='row user-input-row'>
                    {renderFormInputColumn(
                        <>
                            <label htmlFor="formFile" className="form-label">Upload your project folder</label>
                            <div className="custom-file">
                                <input className="form-control"
                                    type="file" id="formFile" onChange={handleSourceFolderUpload}
                                    accept=".zip,.rar,.7zip" />
                            </div>
                        </>
                    )}
                </div>
                <div className='row user-input-row'>
                    {renderFormInputColumn(
                        <>
                            <label className="form-label" htmlFor='formUrl'>Hosted URL</label>
                            <input className="form-control" type="text" name="name" placeholder="Enter URL"
                                id="formUrl" onChange={handleHostURLChange} />
                        </>
                    )}
                </div>
                <div className='row user-input-row'>

                    <div className='col-md-6 upload-file-btn'>
                        <button type="button" className="btn" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            }
            <>
                <div className='row user-input-row'>
                    {showSubmitLoader && <BounceLoader color="#000000" />}
                </div>

                {showTabs &&
                    <div  >
                        <ul className="nav nav-tabs">
                            {tabs.map((tab) => {
                                return (
                                    <li className="nav-item" key={tab.id}>
                                        <a className={`nav-link${tab.id === activeTab ? " active" : ""}`} data-bs-toggle="tab"
                                            href={`#${tab.tabIdentifier}`} onClick={() => setActiveTab(tab.id)}>{tab.tabName}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="tab-content error-tab-content">
                            {tabs.map((tab) => {
                                return (
                                    <div className={`tab-pane container${tab.id === activeTab ? " active" : " fade"}`}
                                        key={tab.tabIdentifier}
                                        id={tab.tabIdentifier}>
                                        <ul>
                                            {renderTabContent(activeTab, accessibilityErrors, errorData, tab)}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
            </>

            {showTabs && <ul className="list-inline pull-right">
                <li>
                    <button type="button" className="btn" onClick={(event) => {
                        handleFixAll(event)
                    }}
                    >Fix All Issues</button></li>
            </ul>
            }
        </div >
    );
}

export default StepTwo;
