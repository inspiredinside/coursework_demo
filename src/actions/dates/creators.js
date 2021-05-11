// types
import {
    SET_START_DATE,
    SET_END_DATE,
    ALL_DATES_ESTABLISHED,
    ERROR_START_DATE_LATER_END,
    ERROR_WRONG_DATE_TYPE,
} from './types';
// selectors

export const setStartDate = (startDate) => ({
    type: SET_START_DATE,
    startDate,
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
