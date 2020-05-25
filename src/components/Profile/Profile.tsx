import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PropfilePagePropsType} from "../../redux/state";



const Profile = (props: PropfilePagePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.propfilePage.posts} />
        </div>
    )
};

export default Profile;