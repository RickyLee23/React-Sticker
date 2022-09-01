import React, { useEffect, useRef, useState } from "react";
import Sticker from "../Sticker/Sticker.tsx";
import './BoardPage.scss'

export default function BoardPage() {

    const notes = [
        {content:'test', positionX:123, positionY:504},
        {content:'test2', positionX:12, positionY:50}
    ];

    const [position, setPosition] = useState(notes);

    const clickBoardMouseUp = (e) => {
        console.log(e.clientX);
        console.log(e.clientY);
        setPosition(
            (state) => [...state, {
                content:'test', 
                positionX:e.clientX, 
                positionY:e.clientY
            }]
        );
    }

    const clickBoardMouseDown = (r) => {
        console.log(r);
    }

    return (
        <div className="boardPage__wrapper"
            onMouseUp={(e) => clickBoardMouseUp(e)}>
                {
                    position.map(i => 
                        <Sticker
                            inputValue={i} 
                            clickBoardMouseDown={clickBoardMouseDown}
                    />)
                }
        </div>
    )
}