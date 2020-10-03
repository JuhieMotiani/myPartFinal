import React, { Component } from 'react';
import Title from '../Title';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

class Album extends Component{
    render(){
        return(
            <div>
                <Title />
                <Link to='/image/1'><Item /></Link>
                
            </div>
        );

    }
}

export default Album;