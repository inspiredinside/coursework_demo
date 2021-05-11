// action types
import {
    SET_START_DATE,
    ALL_DATES_ESTABLISHED,
    ERROR_START_DATE_LATER_END,
    ERROR_WRONG_DATE_TYPE,
    ERROR_END_DATE_AFTER_TODAY,
} from '../actions/dates/types';
// selectors
import { selectCurrentDay } from '../selectors';
// helpers
import setErrorMessage from '../helpers/errorsHelper';
import { setAllDates, setStartDateHelper } from '../helpers/datesHelper';

export const initialState = {
    endDate: selectCurrentDay(),
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ERROR_WRONG_DATE_TYPE:
        case ERROR_END_DATE_AFTER_TODAY:
        case ERROR_START_DATE_LATER_END:
            return setErrorMessage(state, action);
        case SET_START_DATE:
            return setStartDateHelper(state, action);
        case ALL_DATES_ESTABLISHED:
            return setAllDates(state, action);
        default:
            return state;
    }
};
