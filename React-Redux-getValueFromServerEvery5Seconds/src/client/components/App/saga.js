import AppActionsConstants from './constants'
import {call, put, takeEvery, delay} from 'redux-saga/effects'
import AppActions from './actions'

function* getServerData(action) {
    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

        const json = yield call([res, 'json']); //retrieve body of response
        if (res.status >= 400) {
            throw json;
        }
        
        yield put(AppActions.getServerDataSuccess(json.data));
        yield delay(5000)
        yield put(AppActions.getServerData())
        
    } catch (e) {
        yield put(AppActions.getServerDataFailure(e.message));
    }
}

function* AppSaga() {
    yield takeEvery(AppActionsConstants.GET_SERVER_DATA, getServerData);
}

export default AppSaga;
