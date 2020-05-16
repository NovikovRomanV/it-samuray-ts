import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsType = {
    name: string
    id: number
};

const DialogsItems = (props: DialogsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

type MessageType = {
    message: string
    id: number
};

const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
};

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