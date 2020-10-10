import * as ActionTypes from './actionTypes';

export const Comments = (state = {
    comments: [],
    errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            console.log("Comment: ", comment);
            return { ...state, comments: state.comments.concat(comment)};

        default:
          return state;
      }
};