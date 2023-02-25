// @ts-nocheck
import React, { ReactElement, useState } from 'react';
import { API_URL } from '../constant';
import ColorContrastIssue from './ColorContrastIssue';
import ImageAltIssue from './ImageAltIssue';
import './styles/StepTwo.scss';
import Loader from './Loader';
import FetchingErrorsLoader from './FetchingErrorsLoader';
import logo from '../assets/508.png';


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

const renderTabContent = (activeTab, accessibilityErrors, errorData, tab) => {
  switch (activeTab) {
    case 1:
      return (
        <ul className='errordisplay'>
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
        <ul className='colorerrors'>
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
  const [accessibilityErrors, setAccessibilityErrors] = useState<any>(
   [{"description":"Ensures every HTML document has a lang attribute","help":"<html> element must have a lang attribute","helpUrl":"https://dequeuniversity.com/rules/axe/3.1/html-has-lang?application=axeAPI","id":"html-has-lang","impact":"serious","nodes":[{"all":[],"any":[{"data":null,"id":"has-lang","impact":"serious","message":"The <html> element does not have a lang attribute","relatedNodes":[]}],"failureSummary":"Fix any of the following:\n  The <html> element does not have a lang attribute","html":"<html>","impact":"serious","none":[],"target":["html"]}],"tags":["cat.language","wcag2a","wcag311"]},{"description":"Ensures <img> elements have alternate text or a role of none or presentation","help":"Images must have alternate text","helpUrl":"https://dequeuniversity.com/rules/axe/3.1/image-alt?application=axeAPI","id":"image-alt","impact":"critical","nodes":[{"all":[],"any":[{"data":null,"id":"has-alt","impact":"critical","message":"Element does not have an alt attribute","relatedNodes":[]},{"data":null,"id":"aria-label","impact":"serious","message":"aria-label attribute does not exist or is empty","relatedNodes":[]},{"data":null,"id":"aria-labelledby","impact":"serious","message":"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty","relatedNodes":[]},{"data":null,"id":"non-empty-title","impact":"serious","message":"Element has no title attribute or the title attribute is empty","relatedNodes":[]},{"data":null,"id":"role-presentation","impact":"minor","message":"Element's default semantics were not overridden with role=\"presentation\"","relatedNodes":[]},{"data":null,"id":"role-none","impact":"minor","message":"Element's default semantics were not overridden with role=\"none\"","relatedNodes":[]}],"failureSummary":"Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"","html":"<img _ngcontent-knv-c12=\"\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Arduino_ftdi_chip-1.jpg/1024px-Arduino_ftdi_chip-1.jpg\">","impact":"critical","none":[],"target":["img:nth-child(1)"]},{"all":[],"any":[{"data":null,"id":"has-alt","impact":"critical","message":"Element does not have an alt attribute","relatedNodes":[]},{"data":null,"id":"aria-label","impact":"serious","message":"aria-label attribute does not exist or is empty","relatedNodes":[]},{"data":null,"id":"aria-labelledby","impact":"serious","message":"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty","relatedNodes":[]},{"data":null,"id":"non-empty-title","impact":"serious","message":"Element has no title attribute or the title attribute is empty","relatedNodes":[]},{"data":null,"id":"role-presentation","impact":"minor","message":"Element's default semantics were not overridden with role=\"presentation\"","relatedNodes":[]},{"data":null,"id":"role-none","impact":"minor","message":"Element's default semantics were not overridden with role=\"none\"","relatedNodes":[]}],"failureSummary":"Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"","html":"<img _ngcontent-knv-c12=\"\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Audion_receiver.jpg/1024px-Audion_receiver.jpg\">","impact":"critical","none":[],"target":["img:nth-child(2)"]},{"all":[],"any":[{"data":null,"id":"has-alt","impact":"critical","message":"Element does not have an alt attribute","relatedNodes":[]},{"data":null,"id":"aria-label","impact":"serious","message":"aria-label attribute does not exist or is empty","relatedNodes":[]},{"data":null,"id":"aria-labelledby","impact":"serious","message":"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty","relatedNodes":[]},{"data":null,"id":"non-empty-title","impact":"serious","message":"Element has no title attribute or the title attribute is empty","relatedNodes":[]},{"data":null,"id":"role-presentation","impact":"minor","message":"Element's default semantics were not overridden with role=\"presentation\"","relatedNodes":[]},{"data":null,"id":"role-none","impact":"minor","message":"Element's default semantics were not overridden with role=\"none\"","relatedNodes":[]}],"failureSummary":"Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"","html":"<img _ngcontent-knv-c12=\"\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Componentes.JPG/1280px-Componentes.JPG\">","impact":"critical","none":[],"target":["img:nth-child(3)"]},{"all":[],"any":[{"data":null,"id":"has-alt","impact":"critical","message":"Element does not have an alt attribute","relatedNodes":[]},{"data":null,"id":"aria-label","impact":"serious","message":"aria-label attribute does not exist or is empty","relatedNodes":[]},{"data":null,"id":"aria-labelledby","impact":"serious","message":"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty","relatedNodes":[]},{"data":null,"id":"non-empty-title","impact":"serious","message":"Element has no title attribute or the title attribute is empty","relatedNodes":[]},{"data":null,"id":"role-presentation","impact":"minor","message":"Element's default semantics were not overridden with role=\"presentation\"","relatedNodes":[]},{"data":null,"id":"role-none","impact":"minor","message":"Element's default semantics were not overridden with role=\"none\"","relatedNodes":[]}],"failureSummary":"Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\"","html":"<img _ngcontent-knv-c12=\"\" src=\"https://upload.wikimedia.org/wikipedia/commons/3/32/HitachiJ100A.jpg\">","impact":"critical","none":[],"target":["img:nth-child(4)"]}],"tags":["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a"]},{"description":"Ensures every form element has a label","help":"Form elements must have labels","helpUrl":"https://dequeuniversity.com/rules/axe/3.1/label?application=axeAPI","id":"label","impact":"critical","nodes":[{"all":[],"any":[{"data":null,"id":"aria-label","impact":"serious","message":"aria-label attribute does not exist or is empty","relatedNodes":[]},{"data":null,"id":"aria-labelledby","impact":"serious","message":"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty","relatedNodes":[]},{"data":null,"id":"implicit-label","impact":"critical","message":"Form element does not have an implicit (wrapped) <label>","relatedNodes":[]},{"data":null,"id":"explicit-label","impact":"critical","message":"Form element does not have an explicit <label>","relatedNodes":[]},{"data":null,"id":"non-empty-title","impact":"serious","message":"Element has no title attribute or the title attribute is empty","relatedNodes":[]}],"failureSummary":"Fix any of the following:\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Form element does not have an implicit (wrapped) <label>\n  Form element does not have an explicit <label>\n  Element has no title attribute or the title attribute is empty","html":"<input _ngcontent-knv-c12=\"\" type=\"text\" id=\"email\" placeholder=\"email\">","impact":"critical","none":[],"target":["#email"]},{"all":[],"any":[{"data":null,"id":"aria-label","impact":"serious","message":"aria-label attribute does not exist or is empty","relatedNodes":[]},{"data":null,"id":"aria-labelledby","impact":"serious","message":"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty","relatedNodes":[]},{"data":null,"id":"implicit-label","impact":"critical","message":"Form element does not have an implicit (wrapped) <label>","relatedNodes":[]},{"data":null,"id":"explicit-label","impact":"critical","message":"Form element does not have an explicit <label>","relatedNodes":[]},{"data":null,"id":"non-empty-title","impact":"serious","message":"Element has no title attribute or the title attribute is empty","relatedNodes":[]}],"failureSummary":"Fix any of the following:\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Form element does not have an implicit (wrapped) <label>\n  Form element does not have an explicit <label>\n  Element has no title attribute or the title attribute is empty","html":"<input _ngcontent-knv-c12=\"\" type=\"password\" id=\"password\" placeholder=\"password\">","impact":"critical","none":[],"target":["#password"]}],"tags":["cat.forms","wcag2a","wcag332","wcag131","section508","section508.22.n"]}]
  );
  const [errorData, setErrorData] = useState(
    { "img_alt": { "angular-demo\\src\\app\\app.component.html": { "img-alt": [{ "sourceline": 12, "selector": "img[src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Arduino_ftdi_chip-1.jpg/1024px-Arduino_ftdi_chip-1.jpg\"]", "old_value": null, "new_value": "Smartphone", "issue": "img tag missing alt attribute" }, { "sourceline": 13, "selector": "img[src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Audion_receiver.jpg/1024px-Audion_receiver.jpg\"]", "old_value": null, "new_value": "Smartphone", "issue": "img tag missing alt attribute" }, { "sourceline": 14, "selector": "img[src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Componentes.JPG/1280px-Componentes.JPG\"]", "old_value": null, "new_value": "Smartphone", "issue": "img tag missing alt attribute" }, { "sourceline": 15, "selector": "img[src=\"https://upload.wikimedia.org/wikipedia/commons/3/32/HitachiJ100A.jpg\"]", "old_value": null, "new_value": "Smartphone", "issue": "img tag missing alt attribute" }] }, "angular-demo\\src\\index.html": { "img-alt": [] } }, "color_contrast": { "angular-demo\\src\\app\\app.component.css": [{ "selector": "button", "current_colors": { "color": "#f0f8ff", "background-color": "#8a2be2" }, "suggested_colors": { "color": "#ffffff", "background-color": "#000000" } }, { "selector": ".navbar", "current_colors": { "color": "#f5f5dc", "background-color": "#00008b" }, "suggested_colors": { "color": "#ffffff", "background-color": "#000000" } }, { "selector": "#brand", "current_colors": { "color": "#a52a2a", "background-color": "#7fffd4" }, "suggested_colors": { "color": "#ffffff", "background-color": "#000000" } }], "angular-demo\\src\\styles.css": [] } }
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
  const handleBack =(e)=> {
     
    setCurrentStep(1);
    // Do something when at least one technology is selected and Next button is clicked
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
   
    // const response = await fetch(`${API_URL}/issues?url=${hostURL}`, {
    //   method: "GET",
    // });
    // const data = await response.json();
    // // Set the accessibility errors and their categories in the state
    // setAccessibilityErrors(data);

    await fetch(`${API_URL}/fix_all`, {
      method: "POST",
  })

    const errorData = await fetch(`${API_URL}/suggest_changes`, {
        method: "GET"
    })
    const contrastImageErrorData = await errorData.json();
    setErrorData(contrastImageErrorData)

   
    setShowSubmitLoader(false);
    setShowTabs(true);
  };

  const handleFixAll = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setShowLoader(true);

    // await fetch(`${API_URL}/update_changes`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(errorData),
    // });

    setTimeout(() => {
      setShowLoader(false);
      setCurrentStep(3);
    }, 4000);
  };
  return (
    <div className="step-two">
      {showLoader && <Loader />}
      {!showTabs && !showSubmitLoader && (
        <div className=" user-input-form">
           <div className='imgLogo'> <img src={logo} alt="logo" width='180' height='70'/></div>
          <div className="row user-input-row">
            {renderFormInputColumn(
              <><div style={{ position: 'relative' }}>
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
                <span style={{ position: 'absolute', bottom: -17, right: 0,fontSize:12 }}>*Upload zip folder here</span>
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
          <div className="row user-input-row" >
            <div className="col-md-6 upload-file-btn text-end">
            <button type="button" className="btn " onClick={handleBack} style={{paddingLeft:20,paddingRight:20}} >
            Back
              </button>
              

              <button type="button" className="btn" onClick={handleSubmit} style={{marginLeft:10}}>
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
