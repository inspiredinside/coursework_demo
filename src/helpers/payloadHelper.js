import { Interval, Tickers, Epochs, BatchSize } from '../const/form';

export const getValuesByKey = ({ epoch, interval, batchSize, ticker }) => ({
    batchSize: BatchSize[batchSize],
    epoch: Epochs[epoch],
    interval: Interval[interval],
    ticker: Tickers[ticker],
});
