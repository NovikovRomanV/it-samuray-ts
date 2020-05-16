import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn-st3.rtr-vesti.ru/vh/pictures/xw/110/469/4.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;