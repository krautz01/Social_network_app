import './Profile.css';

const Profile = () => {
    return (
        <div className = 'content'>
            <div>
                <img src = 'https://cdn.pixabay.com/photo/2021/08/22/15/48/nature-6565499_960_720.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                New post
                </div>
                <div className = 'posts'>
                <div className = 'item'>
                    Post 1
                </div>
                <div className = 'item'>
                    Post 2
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;