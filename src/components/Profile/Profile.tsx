import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PropsArrayType} from "../../App";


const Profile = (props: PropsArrayType) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts} dialogs={props.dialogs} messages={props.messages}/>
        </div>
    )
};

export default Profile;