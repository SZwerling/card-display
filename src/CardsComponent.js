import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Col, Row} from 'reactstrap'

class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state = { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
    }

    // this.setState({comment: 'Hello'});

    deleteCard = (info) => {
            let filteredNums = this.state.nums.filter((num) => {
                return num !== info
            })
            this.setState({ nums: filteredNums })
            console.log(filteredNums)
    }
    

    render(){

       
        const cardz = this.state.nums.map((numb) => 
          
    <Col key={numb} sm="4" className="py-1">
        <Card>
            <CardBody className="card-body">
            <CardTitle tag="h5">
                {numb}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
            </CardSubtitle>
            <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button color="danger" onClick={() => this.deleteCard(numb)} >
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