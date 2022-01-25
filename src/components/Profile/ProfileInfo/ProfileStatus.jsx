import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import { render } from "@testing-library/react";

class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status, 
    }

    activateEditMod = () => {
        console.log("this:", this)
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMod() {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    };

        render() {
            return (
                <div>
                    {!this.state.editMode &&
                        <div>
                            <span onDoubleClick={this.activateEditMod}>{this.props.status || "-----"}</span>
                        </div>
                    }
                    {this.state.editMode &&
                        <div>
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMod.bind(this)}
                                value={this.state.status} />
                        </div>
                    }
                </div>
            )
        }
    }

export default ProfileStatus;