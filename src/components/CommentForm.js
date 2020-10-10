import React, { Component } from 'react';
import { Button, ModalBody, FormGroup, Label } from 'reactstrap';
import { Form, Control, Errors } from 'react-redux-form';

class CommentForm extends Component {

maxLength = len => val => !val || val.length <= len;
minLength = len => val => !val || val.length >= len;
    
    handleSubmit = v => {
        console.log(v);
        this.props.postComment(this.props.dishId, v.rating, v.author, v.comment);
        this.props.resetCommentForm();
    }
    render() {
        return (           
            <React.Fragment>
                    <ModalBody>                    
                        <Form model="comment" onSubmit={this.handleSubmit}>                            
                            <FormGroup className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select className="form-control" name="rating" model=".rating" defaultValue="1">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>                            
                                </Control.select>
                            </FormGroup>    
                            <FormGroup className="form-group">
                                <Label htmlFor="name">Your Name</Label>
                                <Control.text className="form-control" name="name" id="name" placeholder="Your Name"
                                    required
                                    model=".author"
                                    validators={{ maxLength: this.maxLength(15), minLength: this.minLength(3)}}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        valueMissing: 'Username is required',
                                        maxLength: 'Must be 15 characters or less',
                                        minLength: 'Must be 3 characters or more'
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <Label htmlFor="comment">Your Comment</Label>
                                <Control.textarea className="form-control" rows="6" name="comment" id="comment"
                                    required
                                    model=".comment"
                                    validators={{minLength: this.minLength(10)}}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".comment"
                                    show="touched"
                                    messages={{
                                        valueMissing: 'Write a comment',
                                        minLength: 'Write at less 10 characters',
                                    }}
                                /> 
                            </FormGroup>
                            <Button className="m-3" color="primary">Submit</Button>                            
                        </Form>                        
                    </ModalBody>               
            </React.Fragment>           
        )
    }
}
export default CommentForm;
