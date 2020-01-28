import React, { Component } from 'react';
import MyViews from '../router/index';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="home-box">
                <div className="home-left">
                    <NavLink to="/home/one">111</NavLink>
                    <NavLink to="/home/two">222</NavLink>
                    <NavLink to="/home/therr">333</NavLink>
                </div>
                <div className="home-right">
                    <MyViews routes={this.props.routes} />
                </div>
            </div>
        );
    }
}
