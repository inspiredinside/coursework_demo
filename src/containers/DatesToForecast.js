import { connect } from 'react-redux';
// action creators
import {
    setStartDate,
    setEpoch,
    setPeriod,
    setTicker,
} from '../actions/form/creators';
// selectors
import { selectSettledMoments } from '../selectors/dates';
import { isLoadingSelector } from '../selectors/forecasts';
// component
import DatesToForecast from '../components/DatesToForecast';

export const mapStateToProps = (state) => ({
    startDateDisabled: isLoadingSelector(state),
    moments: selectSettledMoments(state),
});

export const mapDispatchToProps = {
    setStartDate,
    setEpoch,
    setPeriod,
    setTicker,
};

export default connect(mapStateToProps, mapDispatchToProps)(DatesToForecast);
