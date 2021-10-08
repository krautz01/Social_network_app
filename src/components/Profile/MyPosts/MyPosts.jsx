import s from './MyPosts.module.css';
import Post from './Post/Post';

const Posts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you', likesCount: 12 }, 
        {id: 2, message: "It's my first massage", likesCount: 11 },
        {id: 3, message: 'Es ist so kalt!'},
        {id: 4, message: 'Hi!'},
        {id: 5, message: 'Hallo!'},
        {id: 6, message: ''},
        {id: 7, message: ''},
        {id: 8, message: ''},
    ]

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
               <Post message={postData[0].message} likesCount={postData[0].likesCount} />
               <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
               
            </div>
        </div>
    )
}

export default Posts;