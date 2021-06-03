import React from 'react';
import { Image } from 'antd';
import imageHelper from '../helpers/imageHelper';

const ForecastImage = ({ imageUrl }) =>
    imageUrl && imageUrl.length > 0 ? (
        <div>
            <Image width={400} height={400} src={imageHelper(imageUrl)} />
        </div>
    ) : null;

export default ForecastImage;
