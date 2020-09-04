import React from 'react'
import Avatar from '../avatar/Avatar'
import Images from '../img/index.jpg'
// import Button from '../button/Button'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
// import "./card.css";

const Card = ({event,location,member,organizer,button}) => {
    return (
        <div className="card flex-row flex-wrap text-left bg-secondary mb-4">
            <div ><Avatar src={Images} alt={Images}/></div>
            <div className="card-block px-2">
                <h5 className="card-title mt-2"><b>{event}</b></h5>
                <p className="card-text">{location}</p>
                <p className="card-text">{member}</p>
                <p className="card-text">{organizer}</p>
                <Button variant="primary" size="sm">{button}</Button>{' '}
            </div>
        </div>
    )
};

Card.propTypes  = {
    avatar : PropTypes.string.isRequired,
    event : PropTypes.string.isRequired,
    member : PropTypes.string.isRequired,
    organizer : PropTypes.string.isRequired,
    button : PropTypes.string.isRequired,
}

Card.defaultProps = {
    avatar : "Image Here",
    event : "Event Here",
    member : "Member Here",
    organizer : "Organizer Here",
    button : "Name Button"
}

export default Card

/* <div className="card flex-row flex-wrap text-left bg-secondary mb-4">
<Avatar/>
<div className="card-block px-2">
    <h5 className="card-title mt-2"><b>Hactiv8 Meeting</b></h5>
    <p className="card-text">Location : Jakarta, Indonesia</p>
    <p className="card-text">Members : 1,078</p>
    <p className="card-text">Organizers : Alhambra</p>
    <Button variant="primary" size="sm">Join Us</Button>{' '}
</div>
</div> */
