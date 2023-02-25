import React, { useState } from 'react';
//@ts-ignore
import { HuePicker } from 'react-color'
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
    const [foreground, setForeground] = useState('#f4f4f4')
    const [background, setBackground] = useState('#f4f4f4')

    const yellow = ColorContrastCalc.colorFrom(foreground);
    const black = ColorContrastCalc.colorFrom(background);
    const contrast = yellow.contrastRatioAgainst(black)

    return (
        <>
            <div className='col-md-1'>
                {contrastDetails?.selector}
            </div>
            <div className='col-md-4'>
                <div className='current-color-box'
                    style={{ backgroundColor: contrastDetails['current_colors']['color'] }} />

                <div className="colorText">Current Font Color</div>
                <br/>
                
                <div
                    id={`${contrastDetails?.id}-foreground`}
                    className='current-color-box'
                    style={{ backgroundColor: contrastDetails['suggested_colors']['color'] }} /> 

                <div className="colorText">Suggested Font Color</div> 
                <br/>
                
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
                <br/>

                <div
                    id={`${contrastDetails?.id}-background`}
                    className='current-color-box'
                    style={{ backgroundColor: contrastDetails['suggested_colors']['background-color'] }} />
                    <div className="colorText">Suggested Background Color</div>
                    <br/>
                <HuePicker  width="200px"
                    color={contrastDetails['suggested_colors']['background-color']}
                    onChange={(color: any) => {
                        setBackground(color.hex)
                        handleBackgroundColorChange(contrastDetails?.id, color.hex)
                    }} />
            </div>
            <div className='col-md-3'>
            <span className="colorText">Contrast ratio: &nbsp;</span>
                {contrast?.toFixed(2)}
            </div>
        </>
    );
}

export default ColorContrastRow;
