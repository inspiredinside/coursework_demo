import { connect } from 'react-redux';
// action creators
import {
    setStartDate,
    setSelectedInterval,
    setTicker,
    setEpoch,
    setBatchSize,
} from '../actions/form/creators';
// selectors
import {
    selectMapFromObjectConst,
    selectSettledMoments,
} from '../selectors/dates';
import { isLoadingSelector } from '../selectors/forecasts';
// component
import ForecastRequestForm from '../components/ForecastRequestForm';
// constants
import { BatchSize, Epochs, Interval, Tickers } from '../const/form';

export const mapStateToProps = (state) => ({
    startDateDisabled: isLoadingSelector(state),
    moments: selectSettledMoments(state),
    epochs: selectMapFromObjectConst(Epochs),
    intervals: selectMapFromObjectConst(Interval),
    batchSizes: selectMapFromObjectConst(BatchSize),
    tickers: selectMapFromObjectConst(Tickers),
});

export const mapDispatchToProps = {
    setStartDate,
    setSelectedInterval,
    setTicker,
    setEpoch,
    setBatchSize,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForecastRequestForm);
