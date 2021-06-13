import moment from 'moment';
import { BatchSize, Epochs, Interval, Tickers } from '../const/form';

export const selectCurrentDay = () => new Date().toJSON().slice(0, 10);

export const selectSettledMoments = (state) => state.dates || [];

export const selectStartAndEndDate = (state) => ({
    startDate: state.form.startDate,
    endDate: state.form.endDate,
});

export const selectChangesOnOptionsFilled = (state) =>
    Object.keys(Interval).includes(state.form.interval) &&
    Object.keys(BatchSize).includes(state.form.batchSize) &&
    Object.keys(Tickers).includes(state.form.ticker) &&
    Object.keys(Epochs).includes(state.form.epoch);

export const selectMapFromObjectConst = (objectConst) =>
    Object.entries(objectConst);

export const selectFormattedStartAndEndDate = (state) => {
    return Object.keys(state.dates).reduce((acc, key) => {
        const dateByKey = state.dates[key];
        if (typeof dateByKey !== 'string') {
            acc[key] = moment(dateByKey).format('YYYY-MM-DD');
        } else if (dateByKey.length > 10) {
            acc[key] = dateByKey.slice(0, 10);
        } else {
            acc[key] = dateByKey;
        }
        return {
            ...acc,
        };
    }, {});
};
