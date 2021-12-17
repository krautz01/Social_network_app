import s from './ProfileInfo.module.css';
import myPhoto from '../../../assets/images/usersDefaultImage.png'
import Preloader from '../../common/Preloader';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return(
        <div>
            <div>
                <img src = { props.profile.photos.large} className = {s.userPhoto}/>
            </div>
            <div className = {s.descriptionBlock}>
                <div>About me: { props.profile.aboutMe}</div>
                <div>Contacts:
                    <div>facebook: {props.profile.facebook}</div>
                    <div>twitter: {props.profile.twitter}</div>
                    <div>instagram: {props.profile.instagram}</div>
                    <div>github: {props.profile.github}</div>
                </div>
                <div>Full name: {props.profile.fullName}</div>
                <div>Looking for a job: {String(props.profile.lookingForAJob)}</div>
            </div>
        </div>
    )

}

export default ProfileInfo;