import moment from 'moment';

export const selectCurrentDay = () => new Date().toJSON().slice(0, 10);

export const selectSettledMoments = (state) => state.dates || [];

export const selectStartAndEndDate = (state) => ({
    startDate: state.dates.startDate,
    endDate: state.dates.endDate,
});

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
