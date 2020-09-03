import React from 'react'
import Avatar from '../avatar/Avatar'
// import Button from '../button/Button'
import Button from 'react-bootstrap/Button';
// import "./card.css";

const Card = () => {
    return (
        <div className="card flex-row flex-wrap text-left bg-secondary mb-4">
            <Avatar/>
            <div className="card-block px-2">
                <h5 className="card-title mt-2"><b>Hactiv8 Meeting</b></h5>
                <p className="card-text">Location : Jakarta, Indonesia</p>
                <p className="card-text">Members : 1,078</p>
                <p className="card-text">Organizers : Alhambra</p>
                <Button variant="primary" size="sm">Join Us</Button>{' '}
            </div>
        </div>
    )
};

export default Card