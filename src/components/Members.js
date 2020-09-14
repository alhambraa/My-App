import React from 'react'
import Images from './img/index2.jpg'
import Avatar2 from './avatar/Avatar2'
import {MemberBG,MemberCntn} from "./style/MemberStyle";
import PropTypes from 'prop-types'

const Members = ({name,count}) => {
    return (
        <MemberBG>
            <div ><Avatar2 src={Images} alt={Images}/></div>
            <MemberCntn>
                <h5 className="card-title mt-2"><b>Organizer</b></h5>
                <table>
                    <tr>
                        <td>{name}</td>
                        <td></td>
                        <td>{count}</td>
                    </tr>
                </table>
            </MemberCntn>
        </MemberBG>
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
