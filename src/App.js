import React from 'react';
// styles
import './App.css';
// container components
import DatesToForecast from './containers/DatesToForecast';
import RequestForecastButton from './containers/RequestForecastButton';
import ForecastImage from './containers/ForecastImage';

function App() {
    return (
        <div className="App">
            <h1>Рассчитать прогноз</h1>
            <DatesToForecast />
            <RequestForecastButton />
            <ForecastImage />
        </div>
    );
}

export default App;
