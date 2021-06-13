// api call
import forecastRequest from '../../api/forecastRequest';
// action types
import {
    FORECAST_CALCULATION_REQUESTED,
    FORECAST_CALCULATION_CANCELLED,
    FORECAST_IMAGE_RETURNED,
    FORECAST_REMOVED,
    IMAGE_REQUESTED,
    IMAGE_RETURNED,
} from './types';

export const forecastCalculationRequested = () => {
    return {
        type: FORECAST_CALCULATION_REQUESTED,
    };
};

export const forecastCalculationCancelled = () => ({
    type: FORECAST_CALCULATION_CANCELLED,
});

export const forecastCalculationReturned = (imageId) => ({
    type: FORECAST_IMAGE_RETURNED,
    payload: {
        imageId,
    },
});

export const imageRequested = (imageUrl) => ({
    type: IMAGE_REQUESTED,
    payload: {
        imageUrl,
    },
});

export const imageReturned = (imageUrl) => ({
    type: IMAGE_RETURNED,
    payload: {
        imageUrl,
    },
});

export const forecastRemoved = () => ({
    type: FORECAST_REMOVED,
});

export const forecastCalculationRequest = () => {
    return async (dispatch, getState) => {
        const forecastRequestPayload = getState().form;
        try {
            dispatch(forecastCalculationRequested());
            const response = await forecastRequest(forecastRequestPayload);
            dispatch(forecastCalculationReturned(response.imageId));
        } catch (error) {
            dispatch(forecastCalculationCancelled());
        }
    };
};
