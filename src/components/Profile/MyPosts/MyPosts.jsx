import s from './MyPosts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
               <Post massage = 'Hi, how are you' likesCount='0'/>
               <Post massage = "It's my first massage" likesCount='223'/>
               
            </div>
        </div>
    )
}

export default Posts;