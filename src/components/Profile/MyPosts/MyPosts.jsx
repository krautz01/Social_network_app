import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

   /*  let posts = [
        {id: 1, message: "Hi, wie geht's euch?", likesCount: 12 }, 
        {id: 2, message: "Das ist meine erste Nachricht", likesCount: 11 },
        {id: 3, message: 'Hallo!', likesCount: 5 }, 
        {id: 4, message: "Na ja", likesCount: 8 },
    ] */

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />) /* создает мои сообщения и явлется  */

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
               {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;