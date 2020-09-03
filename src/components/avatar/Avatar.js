import React from 'react'

import "./avatar.css";

const Avatar = () => {
    return (
        <img
            src = {require('../img/index.jpg')}
            className="avatar"
            alt="Avatar"
        />
    )
};

export default Avatar