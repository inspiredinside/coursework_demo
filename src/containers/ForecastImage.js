import { connect } from 'react-redux';
// selectors
import { selectImageUrl } from '../selectors/forecasts';
// components
import ForecastImage from '../components/ForecastImage';

export const mapStateToProps = (state) => ({
    imageUrl: selectImageUrl(state),
});

export default connect(mapStateToProps)(ForecastImage);
