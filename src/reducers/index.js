// redux combineReducers
import { combineReducers } from 'redux';
// domain reducers
import dateReducer from './datesReducer';
import forecastReducer from './forecastReducer';

const rootReducer = combineReducers({
    dates: dateReducer,
    forecasts: forecastReducer,
});

export default rootReducer;
