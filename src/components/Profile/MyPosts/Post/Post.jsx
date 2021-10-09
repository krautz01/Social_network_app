import s from './Post.module.css';

const Post = (props) => {
    console.log(props.message);

    return (
        <div className={s.item}>
            <img src='https://yt3.ggpht.com/a/AGF-l799eVkBJz_29r6sl92BcMIkBYgCTrs3Hmc5Zg=s900-c-k-c0xffffffff-no-rj-mo' />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;