//@ts-nocheck
import React from 'react';
import ColorContrastRow from './ColorContrastRow';

type ColorContrastIssueProps = {
    contrastData: any;
}

function ColorContrastIssue({ contrastData }: ColorContrastIssueProps) {
    if (!contrastData) {
        return (<></>)
    }

    const formattedContrastData = Object.entries(contrastData)
        .flatMap(([key, val]) => {
            return val?.map((item: any) => {
                return {
                    ...item,
                    id: Math.random()
                }
            })
        }
        )
    const handleColorChange = (id: number, inputValue: string) => {
        const colorObj = formattedContrastData?.find((item: { id: number }) => item.id === id)
        if (colorObj) {
            colorObj['suggested_colors']['color'] = inputValue
        }
    }

    const handleBackgroundColorChange = (id: number, inputValue: string) => {
        const colorObj = formattedContrastData?.find((item: { id: number }) => item.id === id)
        if (colorObj) {
            colorObj['suggested_colors']['background-color'] = inputValue
        }
    }

    return (
        <div >
            {formattedContrastData?.map((contrastDetails) => {
                return (
                    <div className='row color-picker-row' key={contrastDetails?.id}>
                        <ColorContrastRow
                            handleBackgroundColorChange={handleBackgroundColorChange}
                            handleColorChange={handleColorChange}
                            contrastDetails={contrastDetails} />
                    </div>
                )
            })
            }
        </div>
    );
}

export default ColorContrastIssue;
