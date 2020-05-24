import React from "react";
import s from "./../Dialogs.module.css";
import {MessageType} from "../../../App";


const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
};


export default Message;