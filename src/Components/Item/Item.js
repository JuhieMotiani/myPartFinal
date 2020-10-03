import React, { Component } from 'react';
import './Item.css';

class Item extends Component{
    render(){
        return(
            <div className="itemStyle">
                <img src="https://images.unsplash.com/photo-1601301705603-97fec6eea06b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" width="100%"></img>
            </div>
        );
    }
}

export default Item;