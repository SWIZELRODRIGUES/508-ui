// @ts-nocheck
import React, { ReactElement, useState } from 'react';
import { API_URL } from '../constant';
import ColorContrastIssue from './ColorContrastIssue';
import ImageAltIssue from './ImageAltIssue';
import './styles/StepTwo.scss'


type StepTwoProps = {
    setCurrentStep: Function;
}

const renderFormInputColumn = (element: ReactElement) => {
    return (
        <div className="col-md-4">
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
                    <li >{error}
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
    const [accessibilityErrors, setAccessibilityErrors] = useState<any>(
    );
    const [errorData, setErrorData] = useState(
    )
    const [activeTab, setActiveTab] = useState(1)
    const tabs = [
        { id: 1, tabName: 'Tags issues', tabIdentifier: 'deprecated', excludeError: ['image-alt', 'color-contrast'] },
        { id: 2, tabName: 'Missing Alt Tag', tabIdentifier: 'alt' },
        { id: 3, tabName: 'Color Contrast', tabIdentifier: 'color' },

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
    };


    const handleFixAll = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

         await fetch(`${API_URL}/update_changes`, {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(errorData),
        });

         await fetch(`${API_URL}/fix_all`, {
            method: "POST",
        })

    };

    return (
        <div className='step-two'>
            <div className="row user-input-form">
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
                {renderFormInputColumn(
                    <>
                        <label className="form-label" htmlFor='formUrl'>Hosted URL</label>
                        <input className="form-control" type="text" name="name" placeholder="Enter URL"
                            id="formUrl" onChange={handleHostURLChange} />
                    </>
                )}
                <div className='col-md-4 upload-file-btn'>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            {/* {accessibilityErrors ? ( */}
            <>
                <div  >
                    <ul className="nav nav-tabs">
                        {tabs.map((tab) => {
                            return (
                                <li className="nav-item">
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
                                    id={tab.tabIdentifier}>
                                    <ul>
                                        {renderTabContent(activeTab, accessibilityErrors, errorData, tab)}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
            {/* ) : (
                <p>Loading accessibility errors...</p>
            )
            } */}
            <ul className="list-inline pull-right">
                <li>
                    <button type="button" className="btn btn-primary" onClick={(event) => {
                        handleFixAll(event)
                        // setCurrentStep(3)
                    }}
                    >Fix All Issues</button></li>
            </ul>
        </div >
    );
}

export default StepTwo;
