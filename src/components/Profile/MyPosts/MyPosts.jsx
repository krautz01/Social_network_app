import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import AddNewMyPostForm from './AddNewMyPostForm/AddNewMyPostForm';

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />) /* creat my posts */
    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewMyPostForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};


export default MyPosts;