import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/search-bar.scss';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onSearchTextChange = () =>{
        
    }

    render() {
        return (
            <div className="search-bar-container">
                <FaSearch/>
                <input className="search-bar-input" placeholder="Search" onChange={this.onSearchTextChange}></input>
            </div>
        )
    }
}

export default SearchBar
