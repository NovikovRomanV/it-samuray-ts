import React from 'react';
import s from "./Post.module.css"

type PropsType = {
    message: string
    likesCount: number
    id: number
}

const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK0rm_Nux8s1WoxU7TvaHcE-eN_nO8_Oa8xXXrH8iArmFhBblK&usqp=CAU"/>
            {props.message}
            <div>
                <span>like:</span>
                {props.likesCount}
            </div>
        </div>
    )
};

export default Post;