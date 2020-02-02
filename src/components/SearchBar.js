import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';
import { searchNews } from '../redux/actions';
import '../styles/search-bar.scss';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onSearchTextChange = (event) => {
        var text = event.target.value;
        console.log(text);
        this.props.searchNews(text);
    }

    render() {
        return (
            <div className="search-bar-container">
                <FaSearch className="search-icon" />
                <input className="search-bar-input" placeholder="Search" onChange={this.onSearchTextChange}></input>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {}
}

const mapDispatchToProps = {
    searchNews
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
