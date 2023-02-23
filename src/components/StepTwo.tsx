//@ts-nocheck
import React, { ReactElement, useState } from 'react';
import ImageAltIssue from './ImageAltIssue';
import './styles/StepTwo.scss'

type Error = {
    message: string;
    id: string;
    category: string;
    nodes: NodeErr[];
    description: string;
}

type NodeErr = {
    failureSummary: string;
    html: string;
}

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
function StepTwo({ setCurrentStep }: StepTwoProps) {
    const [sourceFolder, setSourceFolder] = useState<File | null>(null);
    const [hostURL, setHostURL] = useState("");
    const [accessibilityErrors, setAccessibilityErrors] = useState<any>(

    );
    const [activeTab, setActiveTab] = useState(1)
    const tabs = [
        { id: 1, tabName: 'Tags issues', tabIdentifier: 'deprecated', error: ['button-name', 'non-empty-value'] },
        { id: 2, tabName: 'Missing Alt Tag', tabIdentifier: 'alt', error: ['image-alt'] },
        { id: 3, tabName: 'Color Contrast', tabIdentifier: 'color', error: ['color-contrast'] },

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
        formData.append("sourceFolder", sourceFolder || '');
        formData.append("hostURL", hostURL);

        const response = await fetch("http://127.0.0.1:8000/api/issues?url=https://www.w3schools.com/", {
            method: "GET",
        })
        const data = await response.json();
        
        // Set the accessibility errors and their categories in the state
        setAccessibilityErrors(data);
    };

    return (
        <div className='step-two'>
            <div className="row user-input-form">
                {renderFormInputColumn(
                    <>
                        <label htmlFor="formFile" className="form-label">Upload your project folder</label>
                        <div className="custom-file">
                            <input className="form-control" type="file" id="formFile" onChange={handleSourceFolderUpload} />
                        </div>
                    </>
                )}
                {renderFormInputColumn(
                    <>
                        <label className="form-label" htmlFor='formUrl'>Hosted URL</label>
                        <input className="form-control" type="text" name="name" placeholder="Enter URL" id="formUrl" onChange={handleHostURLChange} />
                    </>
                )}
                <div className='col-md-4 upload-file-btn'>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            {accessibilityErrors ? (
                <>
                    <div  >
                        <ul className="nav nav-tabs">
                            {tabs.map((tab) => {
                                return (
                                    <li className="nav-item">
                                        <a className={`nav-link${tab.id === activeTab ? " active" : ""}`} data-bs-toggle="tab" href={`#${tab.tabIdentifier}`} onClick={() => setActiveTab(tab.id)}>{tab.tabName}</a>
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

                                            {accessibilityErrors?.filter((error: any) => tab.error?.includes(error.id))?.flatMap(
                                                (error: any) => error.nodes
                                            )
                                                ?.flatMap((error: any) => error.failureSummary)?.map((error: any) =>
                                                    <li >{error}
                                                        {tab.id === 2 ? <ImageAltIssue /> : <></>}
                                                    </li>
                                                )}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading accessibility errors...</p>
            )
            }
            <ul className="list-inline pull-right">
                <li>
                    <button type="button" className="btn btn-primary" onClick={() => setCurrentStep(3)}>Fix</button></li>
            </ul>
        </div >
    );
}

export default StepTwo;
