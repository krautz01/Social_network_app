import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className = {s.content}>
            <div>
                <img src = 'https://s1.1zoom.ru/big3/825/Canada_Lake_Mountains_502039.jpg' width = '350px'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;