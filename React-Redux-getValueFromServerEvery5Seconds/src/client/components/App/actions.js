import AppActionsConstants from './constants.js';

function getServerData() {
    return {
        type: AppActionsConstants.GET_SERVER_DATA,
        uri: '/api/appTest/getData'
    }
}

function getServerDataSuccess(data) {
    return {
        type: AppActionsConstants.GET_SERVER_DATA_SUCCESS,
        data
    }
}

function getServerDataFailure(msg) {
    return {
        type: AppActionsConstants.GET_SERVER_DATA_FAILURE,
        msg
    }
}


let AppActions = {
    getServerData,
    getServerDataSuccess,
    getServerDataFailure
};

export default AppActions