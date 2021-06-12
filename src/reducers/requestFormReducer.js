// action types
import {
    SET_START_DATE,
    ALL_DATES_ESTABLISHED,
    ERROR_START_DATE_LATER_END,
    ERROR_WRONG_DATE_TYPE,
    ERROR_END_DATE_AFTER_TODAY,
    SET_EPOCH,
    SET_PERIOD,
    SET_TICKER,
} from '../actions/form/types';
// selectors
import { selectCurrentDay } from '../selectors';
// helpers
import setErrorMessage from '../helpers/errorsHelper';
import { setAllDates, setStartDateHelper } from '../helpers/datesHelper';
import { BatchSize, Epochs, Tickers } from '../const/form';

export const initialState = {
    endDate: selectCurrentDay(),
    epoch: Epochs.ONE_DAY,
    ticker: Tickers.APPLE,
    period: 10,
    batchSize: BatchSize['10'],
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
        case SET_EPOCH:
            return { ...state, epoch: action.payload };
        case SET_PERIOD:
            return { ...state, period: action.payload };
        case SET_TICKER:
            return { ...state, ticker: action.payload };
        default:
            return state;
    }
};
