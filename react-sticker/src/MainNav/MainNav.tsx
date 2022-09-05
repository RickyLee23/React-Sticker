import React from "react";
import './MainNav.scss';
import { useEffect } from "react";

export default function MainNav(props) {


    useEffect(() => {
        console.log('isEdit',props);
    })

    return (
        <div>
            <div>好朋友便利貼 Good Friend Sticker</div>
            <button
                onClick={() => props.handleSetMode()}>
                {props.isEdit ? 'review mode' : 'Add a sticker'}
            </button>
        </div>
    )

}