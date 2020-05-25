import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/state";



const DialogsItems = (props: DialogType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogsItems;





