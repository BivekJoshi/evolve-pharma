import React from 'react';
import './ViewButton.scss';

const ViewButton = ({label}) => {
    return (
        <div className="view-all-button-container">
            <button className="view-all-button">{label}</button>
        </div>
    );
}

export default ViewButton;
