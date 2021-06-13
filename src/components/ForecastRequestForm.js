import React from 'react';
import { DatePicker, Select } from 'antd';

const ForecastRequestForm = (props) => {
    const {
        moments,
        intervals,
        epochs,
        batchSizes,
        tickers,
        setStartDate,
        startDateDisabled,
        setSelectedInterval,
        setTicker,
        setEpoch,
        setBatchSize,
    } = props;
    const { RangePicker } = DatePicker;
    const { Option } = Select;
    const setValueForStartDate = (momentsArr) => setStartDate(momentsArr[0]);
    const setSelectedTicker = (selectedCompany) => setTicker(selectedCompany);
    const renderOptions = (options) =>
        options.map(([key, val]) => (
            <Option key={`${val}${key}`} value={key}>
                {val}
            </Option>
        ));
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
                defaultValue="Интервал:"
                style={{ width: 120 }}
                onChange={setSelectedInterval}
            >
                {renderOptions(intervals)}
            </Select>
            <Select
                defaultValue="Кол-во эпох."
                style={{ width: 120 }}
                onChange={setEpoch}
            >
                {renderOptions(epochs)}
            </Select>
            <Select
                defaultValue="Выбери тикер"
                style={{ width: 120 }}
                onChange={setSelectedTicker}
            >
                {renderOptions(tickers)}
            </Select>
            <Select
                defaultValue="Какой тикер?"
                style={{ width: 120 }}
                onChange={setBatchSize}
            >
                {renderOptions(batchSizes)}
            </Select>
        </div>
    );
};

export default ForecastRequestForm;
