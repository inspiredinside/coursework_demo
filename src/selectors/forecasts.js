export const isRequestForecastButtonDisabled = (state) =>
    state.forecasts.forecastRequested;

export const isCancelButtonDisabled = (state) =>
    !state.forecasts.forecastRequested &&
    !state.forecasts.forecastReceived &&
    !state.forecasts.forecastRendered;

export const isLoadingSelector = (state) => state.forecasts.isLoading;

export const selectImageUrl = (state) => state.forecasts.forecastImageUrl;
