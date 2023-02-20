import React from 'react';
//@ts-ignore
import { ColorContrastCalc } from 'color-contrast-calc';
function ColorContrastChecker() {
    const yellow = ColorContrastCalc.colorFrom("yellow");
    const black = ColorContrastCalc.colorFrom("black");

    console.log(`contast ratio between yellow and black: ${yellow.contrastRatioAgainst(black)}`);
    console.log(`contrast level: ${yellow.contrastLevel(black)}`);
    return (
        <>
        </>
    );
}

export default ColorContrastChecker;
