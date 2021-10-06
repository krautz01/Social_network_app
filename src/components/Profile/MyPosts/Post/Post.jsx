import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://p4.wallpaperbetter.com/wallpaper/96/396/904/naruto-shippuden-sharingan-mangekyou-sharingan-anime-naruto-hd-art-wallpaper-preview.jpg' />
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>

    )
}

export default Post;