import React from 'react';
import { DatePicker } from 'antd';

const DatesToForecast = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { moments, setStartDate, startDateDisabled } = props;
    const { RangePicker } = DatePicker;
    const setValueForStartDate = (momentsArr) => setStartDate(momentsArr[0]);
    return (
        <RangePicker
            allowEmpty={false}
            disabled={[startDateDisabled, true]}
            onCalendarChange={(momentsArr) => setValueForStartDate(momentsArr)}
            value={moments[0]}
        />
    );
};

export default DatesToForecast;
