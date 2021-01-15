import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth193394Saga from '../features/EmailAuth193394/redux/sagas';
import CalendarView193392Saga from '../features/CalendarView193392/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth193394Saga,
CalendarView193392Saga,
    
  ]);
}