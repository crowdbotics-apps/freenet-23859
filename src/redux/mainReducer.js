import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth193394Reducer from '../features/EmailAuth193394/redux/reducers';
import CalendarView193392Reducer from '../features/CalendarView193392/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth193394: EmailAuth193394Reducer,
CalendarView193392: CalendarView193392Reducer,

});