import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import { render } from "@testing-library/react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'Yo!'
    }

    activateEditMod() {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMod() {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMod.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMod.bind(this)} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;