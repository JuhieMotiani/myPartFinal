import React, { Component } from 'react';
import Pic from '../Pic/Pic';
import './PicContainer.css';
import { Link } from 'react-router-dom';

class PicContainer extends Component{
    render(){
        return(
            <React.Fragment>
                <Pic />
                <br></br>
                <button>&#x3c;</button> {'    '}
                <button>&#x3e;</button>
                <br></br>
                <br></br>
                <Link exact to='/' className="goBack2Gallery">Go Back to Gallery</Link>
            </React.Fragment>
        );
    }
}

export default PicContainer;