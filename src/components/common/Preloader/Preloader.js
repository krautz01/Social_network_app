import React from 'react';
import preloader from '../../../assets/images/loader.gif';

let Preloader = (props) => {
    return <div style = { { backgroundColour: 'white'}}>
        <img src = {preloader} width='65px'/>
    </div>
}

export default Preloader;