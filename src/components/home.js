import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import { Loading} from './loading';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

const RenderCard = ({item, isLoading, errMess}) => {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else return (
        <FadeTransform in
            transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}
        >  
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>  
    )
}

class Home extends Component {


    render() {
        return (
            <Container>    
                <h1>Home</h1>
                <Jumbotron>
                        <Container>
                            <Row>
                                <Col xs="12" sm="12">
                                    <h1>Ristorante Con Fusion</h1>
                                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                                </Col>
                            </Row>
                        </Container>
                </Jumbotron>
                <Row className="d-flex align-items-stretch">
                    <Col xs="12" md className="m-1">
                        <RenderCard
                            item={this.props.featuredDish}
                            isLoading={this.props.dishesLoading}
                            errMess={this.props.dishesErrMess}
                        />                        
                    </Col>
                    <Col xs="12" md className="m-1">
                        <RenderCard
                            item={this.props.promotion}
                            isLoading={this.props.promoLoading}
                            errMess={this.props.promoErrMess}
                        />   
                    </Col>
                    <Col xs="12" md className="m-1">
                        <RenderCard
                            item={this.props.leader}
                            isLoading={this.props.leadersLoading}
                            errMess={this.props.leadersErrMess}
                        />   
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home