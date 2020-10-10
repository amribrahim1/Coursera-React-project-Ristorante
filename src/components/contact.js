import React, { Component } from 'react';
import { Container, Breadcrumb, BreadcrumbItem, Button, FormGroup, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const isRequired = (val) => val && val.length;
const minLength = (val) => !val || val.length > 9 ; 
const length = (val) => !val || (val.length > 2 && val.length < 15); 
const isEmail = (val) => !val || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const isNumber = (val) => !val || !isNaN(Number(val));

class Contact extends Component {

    handleSubmit = values => {
        console.log(values);
        this.props.postFeedback(values);
        this.props.resetFeedbackForm();
    }
    
    render() {
        return (
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <Row className="row-content">
                    <Col xs="12">
                        <h3>Location Information</h3>
                    </Col>
                    <Col sm="4" className="offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </Col>
                    <Col sm="6" className="offset-sm-1">
                        <h5>Map of our Location</h5>
                    </Col>
                    <Col sm="11" className="offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="https://www.skype.com"><i className="fab fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="far fa-envelope"></i> Email</a>
                        </div>
                    </Col>
                </Row>
                <hr/>
                
                <Row className="row-content">
                    <Col md="9" className="border p-3">
                    <h3>Send Us Your Feedback</h3>
                    <Form model="feedback" onSubmit={this.handleSubmit}>
                        <FormGroup className="form-group">
                            <Label htmlFor="firstname">First Name</Label>
                            <Control.text className="form-control" name="firstname" id="firstname" placeholder="First Name"
                                model=".firstname"
                                validators={{isRequired,length}}
                            />
                            <Errors
                                className="text-danger"
                                model=".firstname"
                                show="touched"
                                messages={{
                                    isRequired: 'Required!. ',
                                    length: 'Must be grater than 2 characters and less than 15 characters.',
                                }}
                            />
                        </FormGroup>
                        <FormGroup className="form-group">
                            <Label htmlFor="lastname">First Name</Label>
                            <Control.text className="form-control" name="lastname" id="lastname" placeholder="Last Name"
                                model=".lastname"
                                validators={{isRequired,length}}
                            />
                            <Errors
                                className="text-danger"
                                model=".lastname"
                                show="touched"
                                messages={{
                                    isRequired: 'Required!. ',
                                    length: 'Must be grater than 2 characters and less than 15 characters.',
                                }}
                            />    
                        </FormGroup>
                        <FormGroup className="form-group">
                            <Label htmlFor="email">Email</Label>
                            <Control.text className="form-control" name="email" id="exampleEmail" placeholder="Email"
                                model=".email"
                                validators={{isRequired,isEmail}}
                            />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    isRequired: 'Required!. ',
                                    isEmail: (val) => `'${val}' is not a valid email.`,
                                }}
                            /> 
                        </FormGroup>
                        <FormGroup className="form-group">
                            <Label htmlFor="telnum">Contact Tel.</Label>
                            <Control.text className="form-control" name="telnum" id="telnum" placeholder="Contact Tel."
                                model=".telnum"
                                validators={{isRequired,isNumber, minLength}}
                            />
                            <Errors
                                className="text-danger"
                                model=".telnum"
                                show="touched"
                                messages={{
                                    isRequired: 'Required!. ',
                                    isNumber: (val) => `'${val}' is not a valid tel. number`,
                                    minLength: (val) => `'${val}' is not a valid tel. number`,
                                }}
                            /> 
                        </FormGroup>
                        <FormGroup className="form-group">
                            <Label htmlFor="message">Your Feedback</Label>
                            <Control.textarea className="form-control" rows="8" name="message" id="message"
                                model=".message"
                                validators={{isRequired, minLength}}
                            />
                            <Errors
                                className="text-danger"
                                model=".message"
                                show="touched"
                                messages={{
                                    isRequired: 'Required!. ',
                                    minLength: 'Write at less 10 characters',
                                }}
                            /> 
                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup className="form-group">
                                   <Control.checkbox className="m-2" defaultValue="true" model=".agree" name="agree"/>
                                    <Label check className="form-check-label"><strong>May we contact you?</strong> </Label>                                     
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup className="form-group">
                                    <Control.select className="form-control" model=".contactType" name="contactType" id="contactType">
                                        <option value="Email">Email</option>
                                        <option value="Tel.">Tel.</option>
                                    </Control.select>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button className="m-3" color="primary">Submit</Button>
                    </Form>
                    </Col>
                </Row>
                <hr/>
            </Container>
        )
    }
}

export default Contact