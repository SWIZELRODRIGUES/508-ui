// @ts-nocheck
import React, { ReactElement, useState } from 'react';
import { API_URL } from '../constant';
import ColorContrastIssue from './ColorContrastIssue';
import ImageAltIssue from './ImageAltIssue';
import './styles/StepTwo.scss'
import Loader from './Loader';
import FetchingErrorsLoader from './FetchingErrorsLoader';
import { BounceLoader } from "react-spinners";

type StepTwoProps = {
  setCurrentStep: Function;
};

const renderFormInputColumn = (element: ReactElement) => {
  return (
    <div className="col-md-6">
      <div className="form-group">{element}</div>
    </div>
  );
};
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

const renderTabContent = (activeTab, accessibilityErrors, errorData, tab) => {
  switch (activeTab) {
    case 1:
      return (
        <ul>
          {accessibilityErrors
            ?.filter((error: any) => !tab.excludeError?.includes(error.id))
            ?.flatMap((error: any) => error.nodes)
            ?.flatMap((error: any) => error.failureSummary)
            ?.map((error: any) => (
              <li>{error?.split("Fix any of the following:")[1]}</li>
            ))}
        </ul>
      );

    case 2:
      return (
        <ul className="ImageRenderAlt">
          <ImageAltIssue imageData={errorData ? errorData["img_alt"] : null} />
        </ul>
      );

    case 3:
      return (
        <ul>
          <ColorContrastIssue
            contrastData={errorData ? errorData["color_contrast"] : null}
          />
        </ul>
      );
  }
};

function StepTwo({ setCurrentStep }: StepTwoProps) {
  const [sourceFolder, setSourceFolder] = useState<File | null>(null);
  const [hostURL, setHostURL] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [showSubmitLoader, setShowSubmitLoader] = useState(false);
  const [showTabs, setShowTabs] = useState(false);
  const [accessibilityErrors, setAccessibilityErrors] = useState<any>();
  const [errorData, setErrorData] = useState(
  );
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      tabName: "HTML Issues",
      tabIdentifier: "deprecated",
      excludeError: ["image-alt", "color-contrast"],
    },
    { id: 2, tabName: "Image Issues", tabIdentifier: "alt" },
    { id: 3, tabName: "Color Contrast Issues", tabIdentifier: "color" },
  ];
  const handleSourceFolderUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSourceFolder(event.target.files ? event.target.files[0] : null);
  };

  const handleHostURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHostURL(event.target.value);
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    // Send the source folder and host URL to the backend API to get accessibility errors
    setShowSubmitLoader(true);
    setShowTabs(false);
    const formData = new FormData();
    formData.append("files", sourceFolder || "");
    await fetch(`${API_URL}/upload_zip`, {
      method: "POST",
      body: formData,
    });

    const response = await fetch(`${API_URL}/issues?url=${hostURL}`, {
      method: "GET",
    });
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
    setShowSubmitLoader(false);
    setShowTabs(true);
  };

  const handleFixAll = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setShowLoader(true);

    await fetch(`${API_URL}/update_changes`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(errorData),
    });

    setTimeout(() => {
      setShowLoader(false);
      setCurrentStep(3);
    }, 4000);
  };
console.log("show",showSubmitLoader)
  return (
    <div className="step-two">
      {showLoader && <Loader />}
      {!showTabs && !showSubmitLoader && (
        <div className=" user-input-form">
          <div className="row user-input-row">
            {renderFormInputColumn(
              <>
                <label htmlFor="formFile" className="form-label">
                  Upload your project folder
                </label>
                <div className="custom-file">
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    onChange={handleSourceFolderUpload}
                    accept=".zip,.rar,.7zip"
                  />
                </div>
              </>
            )}
          </div>
          <div className="row user-input-row">
            {renderFormInputColumn(
              <>
                <label className="form-label" htmlFor="formUrl">
                  Hosted URL
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Enter URL"
                  id="formUrl"
                  onChange={handleHostURLChange}
                />
              </>
            )}
          </div>
          <div className="row user-input-row">
            <div className="col-md-6 upload-file-btn">
              <button type="button" className="btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      <>
      {showSubmitLoader && <FetchingErrorsLoader/> }

        {showTabs && (
          <div>
            <ul className="nav nav-tabs">
              {tabs.map((tab) => {
                return (
                  <li className="nav-item" key={tab.id}>
                    <a
                      className={`nav-link${
                        tab.id === activeTab ? " active" : ""
                      }`}
                      data-bs-toggle="tab"
                      href={`#${tab.tabIdentifier}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.tabName}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="tab-content error-tab-content">
              {tabs.map((tab) => {
                return (
                  <div
                    className={`tab-pane container${
                      tab.id === activeTab ? " active" : " fade"
                    }`}
                    key={tab.tabIdentifier}
                    id={tab.tabIdentifier}
                  >
                    {renderTabContent(
                      activeTab,
                      accessibilityErrors,
                      errorData,
                      tab
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>

      {showTabs && (
        <div className="buttonDiv"> 
            <button
              type="button"
              className="btn"
              onClick={(event) => {
                handleFixAll(event);
              }}
            >
              Fix All Issues
            </button> 
        </div>
      )}
    </div>
  );
}

export default StepTwo;
