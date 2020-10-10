import React, { Component } from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { Link, } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
     render() {
        return (
            <footer className="footer card-header">
                <Container>
                    <Row className="justify-content-center">             
                        <Col xs="4" sm={{size:2,offset:1}} className="offset-1">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/menu">Menu</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </Col>
                        <Col xs="7" sm="5">
                            <h5>Our Address</h5>
                            <address>
                                121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                HONG KONG<br />
                                <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                                <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                                <i className="fa fa-envelope fa-lg"></i>:
                                    <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                        </Col>
                        <Col xs="12" sm="4" className="align-self-center">
                            <div className="text-center">
                                <span className="m-1"><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="googleplus" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(223,39,28,1)" iconSize="5" roundness="15%" url="https://some-website.com/my-social-media-url" size="34" /></span>
                                <span className="m-1"><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,67,246,1)" iconSize="5" roundness="15%" url="https://some-website.com/my-social-media-url" size="34" /></span>
                                <span className="m-1"><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(84,84,254,1)" iconSize="5" roundness="15%" url="https://some-website.com/my-social-media-url" size="34" /></span>
                                <span className="m-1"><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="15%" url="https://some-website.com/my-social-media-url" size="34" /></span>
                                <span className="m-1"><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="youtube" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(240,26,13,1)" iconSize="5" roundness="15%" url="https://some-website.com/my-social-media-url" size="34" /></span>                     
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">           
                        <Col xs="auto">
                            <p>© Copyright 2018 Ristorante Con Fusion</p>
                        </Col>
                    </Row>  
                </Container>
            </footer>
        );
    }
}

export default Footer