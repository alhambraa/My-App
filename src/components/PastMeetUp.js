import React from 'react'
import {Row,Col,Card,Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

const PastMeetUp = ({data}) => {
    return (
        <Row className="ml-2 text-left">
            {
                data.map((list) => (    
            <Col className="col-md-4 grid-wrapper">
                <Card key={list.id}>
                    <Card.Header>{list.header}</Card.Header>
                    <Card.Body>
                        <Card.Title>{list.title}</Card.Title>
                        <Card.Text>{list.content}</Card.Text>
                        <Button variant="success" size="sm">View</Button>{' '}
                    </Card.Body>
                </Card>
            </Col>
            ))
            }   
        </Row>
    )
};

PastMeetUp.prototype = {
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

 // <Container className="text-left">
        //     <Row className="ml-0">
        //         <Col>
        //             <Card>
        //                 <Card.Header>Header</Card.Header>
        //                 <Card.Body>
        //                 <Card.Title>Primary Card Title</Card.Title>
        //                 <Card.Text>
        //                     Some quick example text to build on the card title and make up the bulk
        //                     of the card's content.
        //                 </Card.Text>
        //                 <Button variant="success" size="sm">View</Button>{' '}
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //         <Col>
        //             <Card>
        //                 <Card.Header>Header</Card.Header>
        //                 <Card.Body>
        //                 <Card.Title>Primary Card Title</Card.Title>
        //                 <Card.Text>
        //                     Some quick example text to build on the card title and make up the bulk
        //                     of the card's content.
        //                 </Card.Text>
        //                 <Button variant="success" size="sm">View</Button>{' '}
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //         <Col>
        //             <Card>
        //                 <Card.Header>Header</Card.Header>
        //                 <Card.Body>
        //                 <Card.Title>Primary Card Title</Card.Title>
        //                 <Card.Text>
        //                     Some quick example text to build on the card title and make up the bulk
        //                     of the card's content.
        //                 </Card.Text>
        //                 <Button variant="success" size="sm">View</Button>{' '}
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //     </Row>
        // </Container>

        // const PastMeetUp = ({header,title,content}) => {
        //     return (
        //         <Col>
        //             <Card>
        //                 <Card.Header>{header}</Card.Header>
        //                 <Card.Body>
        //                     <Card.Title>{title}</Card.Title>
        //                     <Card.Text>{content}</Card.Text>
        //                     <Button variant="success" size="sm">View</Button>{' '}
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //     )
        // };
