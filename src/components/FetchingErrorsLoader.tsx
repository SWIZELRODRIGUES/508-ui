import React, { useState } from 'react';
import { ClipLoader, BarLoader } from 'react-spinners';
import './styles/FetchingErrorsLoader.scss'

function FetchingErrorsLoader() {
    
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
        <div className="fetching-loader-container">
            <ClipLoader color="#0d6efd" size={75}  speedMultiplier={0.5} className={"loader-circle"}/>
            <div className="error-loader-percentage"> {25*progressCounter +'%'}</div>

            <br/>
            <div className="error-status">
            <div className='loader-text'>{stepProgressArr[progressCounter]}</div>
            </div>
        </div>
    )
    }

export default FetchingErrorsLoader;