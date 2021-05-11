import { connect } from 'react-redux';
// action creators
import {
    forecastCalculationCancelled,
    proceedRequest,
} from '../actions/forecasts/creators';
// selectors
import {
    isRequestForecastButtonDisabled,
    isCancelButtonDisabled,
    isLoadingSelector,
} from '../selectors/forecasts';
import { selectStartAndEndDate } from '../selectors/dates';
// components
import RequestForecastButton from '../components/RequestForecastButton';

export const mapStateToProps = (state) => ({
    requestButtonDisabled: isRequestForecastButtonDisabled(state),
    cancelButtonDisabled: isCancelButtonDisabled(state),
    forecastRendered: state.forecasts.forecastRendered,
    dates: selectStartAndEndDate(state),
    isLoading: isLoadingSelector(state),
});

export const mapDispatchToProps = {
    proceedRequest,
    forecastCalculationCancelled,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RequestForecastButton);
