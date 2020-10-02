import React from 'react'
import Avatar from '../avatar/Avatar'
import Images from '../img/index.jpg'
import PropTypes from 'prop-types'
import {CardBackground,CardContent} from "../style/CardStyle";
import Button from "../style/Button"


const Card = ({event,location,member,organizer}) => {
    return (
        <CardBackground>
            <div ><Avatar src={Images} alt={Images}/></div>
            <CardContent>
                <h5><b>{event}</b></h5>
                <p className="card-text" id="location">Location : {location}</p>
                <p className="card-text" id="member">Member : {member}</p>
                <p className="card-text" id="organizer">Organizer : {organizer}</p>
                <Button primary="primary" text="Join Us!"></Button>
                <Button text="General"></Button>
            </CardContent>
        </CardBackground>
    )
};

Card.propTypes  = {
    avatar : PropTypes.string.isRequired,
    event : PropTypes.string.isRequired,
    member : PropTypes.string.isRequired,
    organizer : PropTypes.string.isRequired,
}

export default Card
