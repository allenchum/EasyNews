import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select, MenuItem } from '@material-ui/core';
import { switchLanguage } from '../redux/actions';
import '../styles/locale-selector.scss';

class LocaleSwitcher extends Component {
 onSwitchLanguage = (event) => {
    this.props.switchLanguage(event.target.value);
}
render() {
    return (
        <Select
            id="locale-selector"
            value={this.props.currentLanguage}
            onChange={this.onSwitchLanguage}
        >
            <MenuItem value={'en_US'}>EN</MenuItem>
            <MenuItem value={'ar_EG'}>عربى</MenuItem>
        </Select>
    )
}
};

const mapStateToProps = (state) => ({
    currentLanguage: state.language.currentLanguage
});

const mapDispatchToProps = {
    switchLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSwitcher);