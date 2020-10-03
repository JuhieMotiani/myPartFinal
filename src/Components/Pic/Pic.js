import React, { Component } from 'react';
import './Pic.css';

class Pic extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Title</h1>
                <div style={{overflow: "hidden"}}  className="picStyle">
                    <img src="https://images.unsplash.com/photo-1601301705603-97fec6eea06b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" width="100%"></img>
                </div>
                <p>Caption</p>
            </React.Fragment>
        );
    }
}

export default Pic;