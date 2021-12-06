import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Col, Row} from 'reactstrap'

class Cards extends React.Component{
    constructor(props){
        super(props);
    }

    

    render(){

        const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        let counter = 0;
        const cardz = num.map((numb) => 
          
    <Col sm="4" className="py-1">
        <Card key={numb}>
            <CardBody>
            <CardTitle tag="h5">
                Card title
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                {numb}
            </CardSubtitle>
            <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button>
                Button
            </Button>
            </CardBody>
        </Card>
    </Col>
   

        
        )
        return(
            <Row>
                    {cardz}
            </Row>
        )
    }


}

export default Cards;