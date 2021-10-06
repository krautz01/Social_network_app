import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className = {s.content}>
            <div>
                <img src = 'https://cdn.pixabay.com/photo/2021/08/22/15/48/nature-6565499_960_720.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;