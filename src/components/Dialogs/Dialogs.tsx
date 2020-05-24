import React from "react";
import s from "./Dialogs.module.css";
import DialogsItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {PropsArrayDialigsType} from "../../App";


const Dialogs = (props: PropsArrayDialigsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogsItems name={d.name} id={d.id} /> );

    let messageElements = props.messages.map(m => <Message message={m.message} id={m.id} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
};

export default Dialogs;