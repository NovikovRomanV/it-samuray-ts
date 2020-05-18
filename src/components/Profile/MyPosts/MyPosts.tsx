import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post"

type PropsType = {
    message: string
    likesCount: number
    id: number
}

type PropsArrayType = {
    posts: Array<PropsType>
}


const MyPosts = (props: PropsArrayType) => {



    let postElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/> );

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
};

export default MyPosts;