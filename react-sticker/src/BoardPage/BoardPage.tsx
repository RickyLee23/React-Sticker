import React, { useEffect, useRef, useState } from "react";
import Sticker from "../Sticker/Sticker.tsx";
import './BoardPage.scss'

export default function BoardPage(props) {

    let mouseEveryMoveX = 0, mouseEveryMoveY = 0, mouseInitialX = 0, mouseInitialY = 0;

    let offsetMouseToElementX = 0, offsetMouseToElementY = 0;

    const notes = [
        {key:0, content:'test', positionX:123, positionY:504},
        {key:1, content:'test2', positionX:12, positionY:50}
    ];

    const [position, setPosition] = useState(notes);


    /**
     * 按下滑鼠後紀錄當下 dom 元件位置、滑鼠點擊位置
     * 設定拖曳中、拖曳結束需執行的動作
     */
    const dragMouseDown = (e, stickerIndex) => {
        e = e || window.event;
        e.preventDefault();
        mouseInitialX = e.clientX;
        mouseInitialY = e.clientY;

        offsetMouseToElementX = mouseInitialX - e.target.offsetLeft;
        offsetMouseToElementY = mouseInitialY - e.target.offsetTop;

        document.onmousemove = (e) => {
            elementDrag(e, stickerIndex)
        };
        document.onmouseup = closeDragElement;
    }

    /**
     * 每次拖曳後改變便條紙 X, Y
     */
    const elementDrag = (e, stickerIndex) => {
        e = e || window.event;
        e.preventDefault();
        mouseEveryMoveX = mouseInitialX - e.clientX;
        mouseEveryMoveY = mouseInitialY - e.clientY;
  
        let newPositionX =  mouseInitialX - mouseEveryMoveX;
        let newPositionY =  mouseInitialY - mouseEveryMoveY;
        
        setPosition(
            () => position.map((item) => {
                if(item.key === stickerIndex) {
                    item.positionX = newPositionX - offsetMouseToElementX;
                    item.positionY = newPositionY - offsetMouseToElementY;
                }
                return item
            })
        )
    }
  
    /**
     * 清空 mouseup 以及 mousemove 行為
     */
    const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    /**
     * 新增便條紙
     */
    const addNewSticker = (e) => {
        if (!props.isEdit) { return; }
        setPosition(
            (state) => [...state, {
                key: position.length++,
                content: '', 
                positionX: e.clientX, 
                positionY: e.clientY
            }]
        );
        props.handleSetMode();
    }

    /**
     * 編輯便條紙
     */
    const editSticker = () => {
        console.log('editTheSticker')
    }

    return (
        <div className="boardPage__wrapper"
            onMouseUp={(e) => addNewSticker(e)}>
                {
                    position.map(i => {
                        return (
                            <Sticker
                                dragMouseDown={dragMouseDown}
                                key={i.key}
                                inputValue={i}
                                editSticker={editSticker}/>
                            )
                        }
                    )
                }
        </div>
    )
}