import React, { forwardRef, useEffect, useRef } from "react";
import './Sticker.scss'

const Sticker = (props) => {

    return (
        <div className="sticker__container" 
            style={{
                position:'absolute',
                left:props.inputValue.positionX,
                top:props.inputValue.positionY,
            }}
            onDoubleClick={() => {props.editSticker()}}
            onMouseDown={(e) => {props.dragMouseDown(e, props.inputValue.key)}}>
            {props.inputValue.content}
        </div>
    )
}

export default Sticker;