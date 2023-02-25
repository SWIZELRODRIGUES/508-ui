import React, { useState } from 'react';
//@ts-ignore
import { HuePicker, AlphaPicker } from 'react-color'
//@ts-ignore
import { ColorContrastCalc } from 'color-contrast-calc';

type ColorContrastRowProps = {
    handleColorChange: Function;
    handleBackgroundColorChange: Function;
    contrastDetails: any;
}

function ColorContrastRow(
    { handleColorChange, handleBackgroundColorChange, contrastDetails }
        : ColorContrastRowProps) {
    const [foreground, setForeground] = useState(contrastDetails['suggested_colors']['color'])
    const [background, setBackground] = useState(contrastDetails['suggested_colors']['background-color'])

    const foregroundColor = ColorContrastCalc.colorFrom(foreground);
    const backgroundColor = ColorContrastCalc.colorFrom(background);
    const contrast = foregroundColor.contrastRatioAgainst(backgroundColor)

    return (
        <>
            <div className='col-md-1'>
                {contrastDetails?.selector}
            </div>
            <div className='col-md-4'>
                <div className='current-color-box'
                    style={{ backgroundColor: contrastDetails['current_colors']['color'] }} />

                <div className="colorText">Current Font Color</div>
                <br />

                <div
                    id={`${contrastDetails?.id}-foreground`}
                    className='current-color-box'
                    style={{ backgroundColor: contrastDetails['suggested_colors']['color'] }} />

                <div className="colorText">Suggested Font Color</div>
                <br />

                <HuePicker
                    width="200px"
                    color={contrastDetails['suggested_colors']['color']}
                    onChange={(color: any) => {
                        setForeground(color.hex)
                        handleColorChange(contrastDetails?.id, color.hex)
                    }
                    } />

            </div>
            <div className='col-md-4'>
                <div
                    className='current-color-box'
                    style={{ backgroundColor: contrastDetails['current_colors']['background-color'] }} />

                <div className="colorText">Current Background Color</div>
                <br />

                <div
                    id={`${contrastDetails?.id}-background`}
                    className='current-color-box'
                    style={{ backgroundColor: contrastDetails['suggested_colors']['background-color'] }} />
                <div className="colorText">Suggested Background Color</div>
                <br />

                <HuePicker
                    width="200px"
                    color={contrastDetails['suggested_colors']['background-color']}
                    onChange={(color: any) => {
                        setBackground(color.hex)
                        handleBackgroundColorChange(contrastDetails?.id, color.hex)
                    }} />
            </div>
            <div className='col-md-3'>
                <span className="colorText">Contrast ratio: &nbsp;</span>
                {contrast?.toFixed(2)}
                <br />
                {contrast > 4.5 ?
                    <span className="contrast-check">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill " viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        Pass
                    </span>
                    : null}
            </div>
        </>
    );
}

export default ColorContrastRow;
