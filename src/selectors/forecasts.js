export const isRequestForecastButtonDisabled = (state) =>
    state.forecast.forecastRequested;

export const isCancelButtonDisabled = (state) =>
    !state.forecast.forecastRequested &&
    !state.forecast.forecastReceived &&
    !state.forecast.forecastRendered;

export const isLoadingSelector = (state) => state.forecast.isLoading;

export const selectImageUrl = (state) => state.forecast.imageId;
