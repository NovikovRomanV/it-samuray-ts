import React from "react";
import s from "./Dialogs.module.css";
import DialogsItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialigsPageType} from "../../redux/state";



const Dialogs = (props: any) => {

    let dialogsElements = props.dialogs.map((d: any) => <DialogsItems name={d.name} id={d.id} /> );

    let messageElements = props.messages.map((m: any) => <Message message={m.message} id={m.id} /> );

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