// api call
import forecastRequest from '../../api/forecastRequest';
// action types
import {
    FORECAST_CALCULATION_REQUESTED,
    FORECAST_CALCULATION_CANCELLED,
    FORECAST_CALCULATION_RETURNED,
    FORECAST_REMOVED,
} from './types';
// selectors
import { selectFormattedStartAndEndDate } from '../../selectors/dates';

export const forecastCalculationRequested = () => {
    return {
        type: FORECAST_CALCULATION_REQUESTED,
    };
};

export const forecastCalculationCancelled = () => ({
    type: FORECAST_CALCULATION_CANCELLED,
});

export const forecastCalculationReturned = (url) => ({
    type: FORECAST_CALCULATION_RETURNED,
    payload: {
        url,
    },
});

export const forecastRemoved = () => ({
    type: FORECAST_REMOVED,
});

export const proceedRequest = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(forecastCalculationRequested());
            const payload = selectFormattedStartAndEndDate(getState());
            const authData = {
                username: 'username',
                password: 'password',
            };
            const response = await forecastRequest(payload, authData);
            dispatch(forecastCalculationReturned(response.url));
        } catch (error) {
            dispatch(forecastCalculationCancelled());
        }
    };
};
