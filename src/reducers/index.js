// redux combineReducers
import { combineReducers } from 'redux';
// domain reducers
import formReducer from './requestFormReducer';
import forecastReducer from './forecastResultReducer';

const rootReducer = combineReducers({
    form: formReducer,
    forecast: forecastReducer,
});

export default rootReducer;
