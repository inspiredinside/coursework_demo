// types
import {
    SET_START_DATE,
    SET_INTERVAL,
    SET_TICKER,
    SET_END_DATE,
    ALL_DATES_ESTABLISHED,
    ERROR_START_DATE_LATER_END,
    ERROR_WRONG_DATE_TYPE,
    SET_EPOCH,
    SET_BATCH_SIZE,
} from './types';
// selectors

export const setStartDate = (startDate) => ({
    type: SET_START_DATE,
    startDate,
});

export const setSelectedInterval = (interval) => ({
    type: SET_INTERVAL,
    interval,
});

export const setEpoch = (epoch) => ({
    type: SET_EPOCH,
    epoch,
});

export const setBatchSize = (batchSize) => ({
    type: SET_BATCH_SIZE,
    batchSize,
});

export const setTicker = (ticker) => ({
    type: SET_TICKER,
    ticker,
});

export const setEndDate = (endDate) => ({
    type: SET_END_DATE,
    endDate,
});

export const allDatesEstablished = (startDate, endDate) => ({
    type: ALL_DATES_ESTABLISHED,
    dates: { startDate, endDate },
});

export const wrongDateTypes = (startDate, endDate) => ({
    type: ERROR_WRONG_DATE_TYPE,
    message: `Даты ${startDate}, ${endDate} должны быть вида YYYY-MM-DD`,
});

export const startDateLaterEndDateError = (startDate, endDate) => ({
    type: ERROR_START_DATE_LATER_END,
    message: `Дата конца ${endDate} не может быть раньше даты начала ${startDate}`,
});
