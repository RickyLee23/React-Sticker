import React, { forwardRef, useEffect, useRef } from "react";
import './Sticker.scss'

const Sticker = (props) => {
    const ref = useRef(null);

    return (
        <div className="sticker__container" 
            style={{
                position:'absolute',
                left:props.inputValue.positionX,
                top:props.inputValue.positionY,
                backgroundColor: 'red',
            }}
            ref={ref}
            onMouseDown={() => props.clickBoardMouseDown(ref)}>
            {props.inputValue.content}
        </div>
    )
}

export default Sticker;