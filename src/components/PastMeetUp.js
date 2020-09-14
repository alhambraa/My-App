import React from 'react'
import {Row} from 'react-bootstrap'
import PropTypes from 'prop-types'
import Button from './style/Button'
import {PastMeetBG,PassMeetCntn} from "./style/PastMeetStyle";

const PastMeetUp = ({data}) => {
    return (
        <Row className="ml-2 text-left">
            {
                data.map((list) => (    
                    <PastMeetBG>
                        <PassMeetCntn>
                            <p key={list.id}></p>
                            <p>{list.header}</p>
                            <hr></hr>
                            <br></br>
                            <p>{list.title}</p>
                            <p>{list.content}</p>
                            <Button primary="primary" text="View"></Button>
                        </PassMeetCntn>
                    </PastMeetBG>
                ))
            }   
        </Row>
    )
};

PastMeetUp.propTypes  = {
    header : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
}

PastMeetUp.defaultProps = {
    header : "Header Here",
    title : "Title Here",
    content : "Content Here"
}

export default PastMeetUp;

