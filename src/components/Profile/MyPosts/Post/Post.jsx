import s from './Post.module.css';
import usersPhoto from '../../../../assets/images/usersDefaultImage.png';

const Post = (props) => {return (
        <div className={s.item}>
            <img src={usersPhoto} />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;