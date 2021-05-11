import {
    FORECAST_CALCULATION_REQUESTED,
    FORECAST_CALCULATION_CANCELLED,
    FORECAST_CALCULATION_RETURNED,
    FORECAST_CALCULATION_RENDERED,
    FORECAST_REMOVED,
} from '../actions/forecasts/types';

export const initialState = {
    forecastRequested: false,
    forecastReceived: false,
    forecastRendered: false,
    forecastEstablished: false,
    isLoading: false,
    forecastImageUrl: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FORECAST_CALCULATION_REQUESTED:
            return { ...state, forecastRequested: true, isLoading: true };
        case FORECAST_CALCULATION_CANCELLED:
            return initialState;
        case FORECAST_CALCULATION_RETURNED:
            return {
                ...state,
                forecastRequested: false,
                forecastReceived: true,
                isLoading: false,
                forecastRendered: true,
                forecastImageUrl: action.payload.url,
            };
        case FORECAST_CALCULATION_RENDERED:
            return { ...state, forecastRendered: true };
        case FORECAST_REMOVED:
            return { ...state, ...initialState };
        default:
            return state;
    }
};
