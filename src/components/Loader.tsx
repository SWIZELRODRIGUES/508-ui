import React, { useState } from 'react';
import { BounceLoader } from 'react-spinners';
import './styles/Loader.scss'


function Loader() {
    const [progressCounter, setProgressCounter] = useState(0)
    const stepProgressArr = ['Fixing images...', 'Fixing constrast...', 'Fixing tags...']

    setTimeout(() => {
        if (progressCounter < stepProgressArr.length - 1) {
            setProgressCounter(progressCounter + 1)
        } else {
            setProgressCounter(0)
        }
    }, 1500)

    return (
        <div className="loader-container">
            {/* <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>*/}
            <BounceLoader color="#0d6efd" />
            <span className='loader-text'>{stepProgressArr[progressCounter]}</span> 
        </div>
    )
}

export default Loader;