import React from 'react'
import Images from './img/index2.jpg'
import Avatar2 from './avatar/Avatar2'
import PropTypes from 'prop-types'

const Members = ({name,count}) => {
    return (
        <div className="card flex-row flex-wrap text-left bg-secondary mb-4 ml-4">
            <div ><Avatar2 src={Images} alt={Images}/></div>
            <div className="card-block px-4">
                <h5 className="card-title mt-2"><b>Organizer</b></h5>
                <table>
                    <tr>
                        <td>{name}</td>
                        <td></td>
                        <td>{count}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
};

Members.propTypes  = {
    name : PropTypes.string.isRequired,
    count : PropTypes.string.isRequired,
}

Members.defaultProps = {
    name : "Name Here",
    count : "Count Here"
}


export default Members;
