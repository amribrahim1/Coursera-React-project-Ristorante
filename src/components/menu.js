import React from 'react';
import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading} from './loading';
import { baseUrl } from '../shared/baseUrl';

const Menu = props => {
    if (props.dishes.isLoading) {
        return(
            <Container>
                <Row>            
                    <Loading />
                </Row>
            </Container>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <Container>
                <Row> 
                    <Col xs="auto">
                        <h4>{props.dishes.errMess}</h4>
                    </Col>
                </Row>
            </Container>
        );
    }
    else return (
        <Container>            
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <Row>
                {props.dishes.dishes.map((dish) => 
                    <Col xs="12" md="5" key={dish.id} className="m-1">
                        <Card>
                            <Link to={`/menu/${dish.id}`}>
                                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                                <CardImgOverlay>
                                    <CardTitle>{dish.name}</CardTitle>
                                </CardImgOverlay>
                            </Link>
                        </Card>
                    </Col>           
                )};
            </Row>               
        </Container>
    )
}

export default Menu