import s from './ProfileInfo.module.css';
import myPhoto from '../../../assets/images/usersDefaultImage.png'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={myPhoto} width='100px' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;