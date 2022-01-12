import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} className={s.userPhoto} />
                <ProfileStatus status={"Hello my Friends!"}/>
                <div>About me: {props.profile.aboutMe}</div>

                <div>Contacts:
                    <div>facebook: <a href={props.profile.contacts.facebook}>
                        {props.profile.contacts.facebook}
                    </a>
                    </div>

                    <div>twitter: <a href={props.profile.contacts.twitter}>
                        {props.profile.contacts.twitter}
                    </a>
                    </div>

                    <div>vk: <a href={props.profile.contacts.vk}>
                        {props.profile.contacts.vk}
                    </a>
                    </div>

                    <div>instagram: <a href={props.profile.contacts.instagram}>
                        {props.profile.contacts.instagram}
                    </a>
                    </div>

                    <div>github: <a href={props.profile.contacts.github}>
                        {props.profile.contacts.github}
                    </a>
                    </div>


                </div>

                <div>Full name: {props.profile.fullName}</div>
                
                <div>Looking for a job: {String(props.profile.lookingForAJob)}</div>
            </div>
        </div>
    )

}

export default ProfileInfo;