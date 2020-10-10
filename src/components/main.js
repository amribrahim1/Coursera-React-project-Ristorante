import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { actions } from 'react-redux-form';
import Menu from './menu';
import Bar from './navbar';
import Footer from './footer';
import Home from './home';
import Contact from './contact';
import Details from './dishDetails';
import About from './about';

import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders, postComment, postFeedback } from '../redux/actionCreators';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {    
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => { dispatch(fetchDishes())},    
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    resetCommentForm: () => dispatch(actions.reset('comment')),
    postFeedback: (feedback) => dispatch(postFeedback(feedback)),
    resetFeedbackForm: () => dispatch(actions.reset('feedback')),
})

class Main extends Component {
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    };

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    };

     render() {
        return (
            <div className="App">
                <Bar />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={ () =>
                                <Home
                                    featuredDish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                                    promoLoading={this.props.promotions.isLoading}
                                    promoErrMess={this.props.promotions.errMess}
                                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}  
                                    dishesLoading={this.props.dishes.isLoading}
                                    dishesErrMess={this.props.dishes.errMess}
                                    leadersLoading={this.props.leaders.isLoading}
                                    leadersErrMess={this.props.leaders.errMess}
                                />}
                            />                                                        
                            <Route path="/menu" exact component={() => <Menu
                                dishes={this.props.dishes}
                                selectedDish={this.props.selectedDish}
                                onClick={(dish) => {this.onDishSelect(dish)}}
                            />} />  
                            <Route path='/menu/:id' component={(props) => <Details
                                dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(props.match.params.id))[0]}
                                comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(props.match.params.id))}
                                isLoading={this.props.dishes.isLoading}
                                errMess={this.props.dishes.errMess}
                                commentsErrMess={this.props.comments.errMess}
                                commentsIsLoading={this.props.comments.isLoading}
                                postComment={this.props.postComment}
                                resetCommentForm={this.props.resetCommentForm}
                            /> } />   
                            <Route path="/about" component={() => <About
                                leaders={this.props.leaders.leaders}
                                isLoading={this.props.leaders.isLoading}
                                errMess={this.props.leaders.errMess}
                            /> } />    
                            <Route exact path='/contact' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />          
                            <Redirect from="/" exact to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <br/>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));