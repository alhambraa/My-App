import React from 'react'
import Avatar2 from './avatar/Avatar2'

const Members = () => {
    return (
        <div className="card flex-row flex-wrap text-left bg-secondary mb-4 ml-4">
            <Avatar2/>
            <div className="card-block px-4">
                <h5 className="card-title mt-2"><b>Organizer</b></h5>
                <p className="card-text">Adhy Wiranata      4 others.</p>
            </div>
        </div>
    )
};

export default Members;