import React, { Component } from 'react';
import { Article } from 'react-weui';
import './App.css';


class pageTitle extends Component {
    render() {
        return (
            <div className="cell pageTitle" title="List">
                <Article>
                    <h2>{this.props.title}</h2>
                </Article>
            </div>
        );
    }
}

export default pageTitle;
