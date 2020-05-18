import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
    message: string
    likesCount: number
    id: number
}

type PropsArrayType = {
    posts: Array<PropsType>
}



const Profile = (props: PropsArrayType) => {



    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
};

export default Profile;