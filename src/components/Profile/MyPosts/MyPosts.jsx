import s from './MyPosts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
               <Post massage = 'Hi, how are you' likesCount='0'/>
               <Post massage = "It's my first massage" likesCount='223'/>
               
            </div>
        </div>
    )
}

export default Posts;