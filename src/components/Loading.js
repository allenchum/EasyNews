import React from 'react';

import '../styles/loading.scss';


export default function Loading() {

    return (
        <div className="loading-icon-wrapper">
            <div className="loading-icon"></div>
            <div className="loading-text">Loading ...</div>
        </div>
    )
}