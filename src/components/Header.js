import React, { Component } from 'react';
import SearchBar from './SearchBar';

import '../styles/header.scss';


class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="header-title">
                    US News
                </div>
                <SearchBar></SearchBar>       
            </div>
        )
    }
}

export default Header
