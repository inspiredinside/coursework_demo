import React from 'react';
import { Button, Spin, Alert } from 'antd';

const RequestForecastButton = (props) => {
    const {
        isLoading,
        requestButtonDisabled,
        proceedRequest,
        forecastCalculationCancelled,
        cancelButtonDisabled,
        forecastRendered,
        dates: { startDate },
    } = props;
    const renderAlert = () =>
        !forecastRendered ? (
            <div>
                <Spin spinning={isLoading}>
                    <Alert
                        message="Расчет может занять некоторое время..."
                        description="Ниже будет график цен и дальнейший прогноз"
                        type="info"
                    />
                </Spin>
            </div>
        ) : null;
    const dispatchForecastRequest = () => proceedRequest();
    const forecastButtonDisabled = requestButtonDisabled || !startDate;
    return (
        <>
            <Button
                disabled={forecastButtonDisabled}
                onClick={() => dispatchForecastRequest()}
            >
                Рассчитать прогноз
            </Button>
            <Button
                type="primary"
                disabled={cancelButtonDisabled}
                onClick={() => forecastCalculationCancelled()}
                danger
            >
                Отменить расчет
            </Button>
            {renderAlert()}
        </>
    );
};

export default RequestForecastButton;
