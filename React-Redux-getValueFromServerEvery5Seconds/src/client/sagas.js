import {all} from 'redux-saga/effects'
import AppSaga from './components/App/saga';

export default function* Sagas() {
    yield all([
        AppSaga(),
    ])
}