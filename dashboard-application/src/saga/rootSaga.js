import { loginMiddleware} from './SagaloginMiddleware';
import { fork } from "redux-saga/effects";
import { myFilesMiddleware } from './SagaMyFilesMiddleware';
import { sharedFilesMiddleware } from './SageSharedFilesMiddleware';


export default function* rootSaga() {

    yield fork(loginMiddleware)
    yield fork(myFilesMiddleware)
    yield fork(sharedFilesMiddleware)
}