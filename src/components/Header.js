import React, { Component } from 'react';
import SearchBar from './SearchBar';
import LocaleSelector from './LocaleSelector';

import '../styles/header.scss';


class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="header-title">
                    US News
                </div>
                <div className="header-end-wrapper">
                    <LocaleSelector/>
                    <SearchBar/>
                </div>
            </div>
        )
    }
}

export default Header
