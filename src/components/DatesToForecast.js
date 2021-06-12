import React from 'react';
import { DatePicker, Select } from 'antd';

const DatesToForecast = (props) => {
    const {
        moments,
        setStartDate,
        startDateDisabled,
        setEpoch,
        // setPeriod,
        setTicker,
    } = props;
    const { RangePicker } = DatePicker;
    const { Option } = Select;
    const setValueForStartDate = (momentsArr) => setStartDate(momentsArr[0]);
    const setSelectedEpoch = (selectedEpochValue) =>
        setEpoch(selectedEpochValue);
    // const setSelectedPeriod = (selectedPeriodValue) =>
    //     setPeriod(selectedPeriodValue);
    const setSelectedTicker = (selectedCompany) => setTicker(selectedCompany);
    return (
        <div>
            <RangePicker
                allowEmpty={false}
                disabled={[startDateDisabled, true]}
                onCalendarChange={(momentsArr) =>
                    setValueForStartDate(momentsArr)
                }
                value={moments[0]}
            />
            <Select
                defaultValue="1d"
                style={{ width: 120 }}
                onChange={setSelectedEpoch}
            >
                <Option value="1d">1d</Option>
                <Option value="1m">1m</Option>
                <Option value="1y">1y</Option>
            </Select>
            <Select
                defaultValue="AAPL"
                style={{ width: 120 }}
                onChange={setSelectedTicker}
            >
                <Option value="TSLA">TSLA</Option>
                <Option value="GOOG">GOOG</Option>
                <Option value="AMZN">AMZN</Option>
            </Select>
            <Select defaultValue="10" style={{ width: 120 }}>
                <Option value="50">TSLA</Option>
                <Option value="100">GOOG</Option>
                <Option value="200">AMZN</Option>
            </Select>
        </div>
    );
};

export default DatesToForecast;
