import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileNavigation from './components/FileNavigation';

interface fileErr {
    fileName: string;
    error: string;
}
function IssueSummary() {
    const history = useNavigate();
    const [selectedFile, setSelectedFile] = useState('')
    const files = ['test.tsx', 'index.html']

    const fileErrArr: fileErr[] = [
        {
            fileName: 'test.tsx',
            error: 'color constraint'
        },
        {
            fileName: 'index.html',
            error: 'missing alt text'
        }
    ]
    return (
        <div>
            <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <FileNavigation files={files} setSelectedFile={setSelectedFile} selectedFile={selectedFile} />
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                   {fileErrArr.find(file => file.fileName === selectedFile)?.error}
                </div>
            </div>
            <button type="button" className="btn btn-primary" onClick={() =>
                history('/preview')
            }>
                Fix All
            </button>
        </div>
    );
}

export default IssueSummary;
