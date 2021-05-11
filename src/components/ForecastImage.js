import React from 'react';
import { Image } from 'antd';

const ForecastImage = ({ imageUrl }) =>
    imageUrl.length > 0 ? (
        <div>
            <Image width={200} src={imageUrl} />
        </div>
    ) : null;

export default ForecastImage;
