//@ts-nocheck
import React from 'react';
//@ts-ignore
import { HuePicker } from 'react-color'
// import { ColorContrastCalc } from 'color-contrast-calc';

type ColorContrastIssueProps = {
    contrastData: any;
}
function ColorContrastIssue({ contrastData }: ColorContrastIssueProps) {
    // const yellow = ColorContrastCalc.colorFrom("yellow");
    // const black = ColorContrastCalc.colorFrom("black");

    // console.log(`contast ratio between yellow and black: ${yellow.contrastRatioAgainst(black)}`);
    // console.log(`contrast level: ${yellow.contrastLevel(black)}`);

    if (!contrastData) {
        return (<></>)
    }

    const formattedContrastData = Object.entries(contrastData)
        .flatMap(([key, val]) => {
            return val?.map(item => {
                return {
                    ...item,
                    id: Math.random()
                }
            })
        }
        )
    const handleColorChange = (id: number, inputValue) => {
        const colorObj = formattedContrastData?.find((item: { id: number }) => item.id === id)
        if (colorObj) {
            colorObj['suggested_colors']['background-color'] = inputValue
        }
    }

    return (

        <div >
            {formattedContrastData?.map((contrastDetails) => {
                return (
                    <div className='row'>
                        <div className='col-md-4'>
                            <HuePicker
                                color={formattedContrastData?.find((item: { id: number }) => item.id === contrastDetails?.id)?.suggested_colors?.['background-color']}
                                onChange={(color: any) => handleColorChange(contrastDetails?.id, color.hex)} />
                        </div>
                        <div className='col-md-4'>
                            <HuePicker
                                color={formattedContrastData?.find((item: { id: number }) => item.id === contrastDetails?.id)?.suggested_colors?.['background-color']}
                                onChange={(color: any) => handleColorChange(contrastDetails?.id, color.hex)} />
                        </div>

                    </div>
                )
            })
            }


        </div>

    );
}

export default ColorContrastIssue;
