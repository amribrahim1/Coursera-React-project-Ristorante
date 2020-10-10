import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading} from './loading';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const Dish = ({dish}) => {
    return (
        <FadeTransform
            in
            transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
            <Card>
                <CardBody key={dish.id}>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    )
}

const Comments = ({comment}) => {
    return (        
        <ul className="list-unstyled">
            <Stagger in>
                <Fade in>
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li><br/>
                </Fade>
            </Stagger>
        </ul>        
    )
}

class Details extends Component {
    state= {
        isOpen:false
    }

    toggle = () => {
        this.setState({isOpen:!this.state.isOpen});
    }

    close = () => { return <button className="close" onClick={this.toggle}>&times;</button>;}
    
    render() {
        if (this.props.isLoading) {
            return(
                <Container>
                    <Row>            
                        <Loading />
                    </Row>
                </Container>
            );
        }
        else if (this.props.errMess) {
            return(
                <Container>
                    <Row>            
                        <h4>{this.props.errMess}</h4>
                    </Row>
                </Container>
            );
        }
        return (
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <Jumbotron>
                    <Row>
                        <Col sm>
                            <Dish dish={this.props.dish} />
                        </Col>                
                        <Col sm>                        
                            <Card className="flex-fill">
                                <CardBody>                                    
                                        {this.props.comments.map(comment => {
                                            return (
                                                <Comments comment={comment} key={comment.id}/>
                                            )
                                        })}
                                </CardBody>
                            </Card>
                            <div>
                                <Button color="secondary mt-3" onClick={this.toggle}><i className="fas fa-user-edit mr-2"></i>Submit Comment</Button>
                            </div>                                         
                        </Col>                   
                    </Row>
                </Jumbotron> 
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle} close={this.close()}>Modal title</ModalHeader>
                    <CommentForm dishId={this.props.dish.id} postComment={this.props.postComment} resetCommentForm={this.props.resetCommentForm} />
                </Modal>     
            </Container>
        )
    }
}

export default Details