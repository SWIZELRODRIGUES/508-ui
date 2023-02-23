import React, {  useState } from 'react';

function ImageAltIssue() {
    const [data, setData] = useState({
        id: '1',
        image: 'D:/Projects/SemiColon/508-ui/public/logo192.png',
        suggestedDesc: 'A laptop',
        userDesc: '',
        error: 'Alt tag missing'
    })

    return (
        <div id={data.id}>
            <img className="" src={data.image} alt={data.suggestedDesc} />
            <p> {data.suggestedDesc}</p>
            <input type="text" id={`${data.id}-input`} onChange={(e) => {
                const updatedData = { ...data, userDesc: e.target.value }
                setData({ ...updatedData })
            }} />
        </div>
    )
}

export default ImageAltIssue;