import { connect } from 'react-redux';
// action creators
import {
    forecastCalculationCancelled,
    forecastCalculationRequest,
} from '../actions/forecasts/creators';
// selectors
import {
    isRequestForecastButtonDisabled,
    isCancelButtonDisabled,
    isLoadingSelector,
} from '../selectors/forecasts';
import {
    selectStartAndEndDate,
    selectChangesOnOptionsFilled,
} from '../selectors/dates';
// components
import RequestForecastButton from '../components/RequestForecastButton';

export const mapStateToProps = (state) => ({
    requestButtonDisabled: isRequestForecastButtonDisabled(state),
    cancelButtonDisabled: isCancelButtonDisabled(state),
    forecastRendered: state.forecast.forecastRendered,
    dates: selectStartAndEndDate(state),
    optionFieldsSelected: selectChangesOnOptionsFilled(state),
    isLoading: isLoadingSelector(state),
});

export const mapDispatchToProps = {
    proceedRequest: forecastCalculationRequest,
    forecastCalculationCancelled,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RequestForecastButton);
