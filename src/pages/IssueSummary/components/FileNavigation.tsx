import React from 'react';

type FileNavigationProps = {
    files: string[];
    setSelectedFile: Function;
    selectedFile: string;
}
const fileButton = (isActive: boolean, fileName: string, setSelectedFile: Function) => {
    return (
        <button className={`nav-link ${isActive ? 'active' : ''}`} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => setSelectedFile(fileName)}>{fileName}</button>
    )
}
function FileNavigation({ files, setSelectedFile, selectedFile }: FileNavigationProps) {
    return (
        <div >
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {files.map((file) => fileButton(selectedFile === file, file, setSelectedFile))}
            </div>
        </div>
    );
}

export default FileNavigation;
