import React from "react";
import s from "./Dialogs.module.css";
import DialogsItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Vas"},
        {id: 3, name: "Bobs"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Lex"}
    ];

    let dialogsElements = dialogsData.map(d => <DialogsItems name={d.name} id={d.id} /> );

    let messagesData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Good!"}
    ];

    let messageElements = messagesData.map(m => <Message message={m.message} id={m.id} /> );

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