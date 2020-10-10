import React, { Component } from 'react';
import { Container, Navbar, NavbarToggler, Collapse, Nav, NavItem, NavbarText, Button, Modal, ModalHeader, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Bar extends Component {
    state = {
        isOpen: false,
        modal: false
    }
    
    toggle = () => {
        this.setState({isOpen:!this.state.isOpen});
    }
    loginToggle = () => {
        this.setState({modal:!this.state.modal});
    }

    handleLogin = e => {
        e.preventDefault();
        alert(`Username: ${this.username.value}, Password: ${this.password.value}, Remember: ${this.remember.checked}`)
        this.loginToggle();
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark color="dark" expand="md">
                    <NavLink className="navbar-brand" to="/home">
                        <img src='logo.png' width="70px" alt="Ristorante Con Fusion logo" />
                        Ristorante Con Fusion
                    </NavLink>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem><NavLink className="nav-link" to="/Home">Home</NavLink></NavItem>
                            <NavItem><NavLink className="nav-link" to="/menu">Menu</NavLink></NavItem>
                            <NavItem><NavLink className="nav-link" to="/about">About Us</NavLink></NavItem>
                            <NavItem><NavLink className="nav-link" to="/contact">Contact Us</NavLink></NavItem>
                        </Nav>
                        <NavbarText><Button onClick={this.loginToggle} color="primary"><i className="fas fa-sign-in-alt"></i><span className="m-1">Login</span></Button></NavbarText>
                    </Collapse>
                </Navbar>
                <Modal isOpen={this.state.modal} toggle={this.loginToggle}>
                    <ModalHeader>Login</ModalHeader>
                    <Container className="p-3">
                        <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} />Remember me</Label>
                        </FormGroup>
                        <Button className="m-3" type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </Container>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Bar