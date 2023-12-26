import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div className={s.myPosts}>
      My posts
      <div className={s.addPost}>
        New post
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi!, how are you ?" />
        <Post message="It's my first messsage" />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
