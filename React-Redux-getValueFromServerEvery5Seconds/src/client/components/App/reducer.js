import initialState from '../../initialState';
import AppActionsConstants from './constants.js';

const AppReducer = (state = initialState.app, action) => {
    switch (action.type) {
        case AppActionsConstants.GET_SERVER_DATA_SUCCESS:
            return state.set('data', action.data);
        case AppActionsConstants.GET_SERVER_DATA_FAILURE:
            console.log(action.msg)
            return state.set('data', undefined);
        default: //otherwise state is lost!
            return state;
    }
};


export default AppReducer

