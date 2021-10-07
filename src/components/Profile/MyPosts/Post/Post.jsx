import s from './Post.module.css';

const Post = (props) => {
    console.log(props.massage);

    return (
        <div className={s.item}>
            <img src='https://p4.wallpaperbetter.com/wallpaper/96/396/904/naruto-shippuden-sharingan-mangekyou-sharingan-anime-naruto-hd-art-wallpaper-preview.jpg' />
            {props.massage}
            <div>
                <span>like</span> {props.likesCount}
            </div>

            <input value='6' />
            <input />
        </div>



    )
}

export default Post;