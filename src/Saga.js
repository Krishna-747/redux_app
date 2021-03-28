import { takeEvery, put } from 'redux-saga/effects'

function* call_(x){
    yield put({ type: 'SAGA_RED', plusten: x.value })
}

function* rootSaga(){
    yield takeEvery('DASH', call_)
}

export default rootSaga;