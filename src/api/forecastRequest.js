import axios from 'axios';
import { Validator } from 'jsonschema';
import { getValuesByKey } from '../helpers/payloadHelper';

export const castToValuablePayload = (payload) => {
    const { startDate, endDate, ...optionFields } = payload;
    const preparedOptionFields = getValuesByKey(optionFields);
    return { startDate, endDate, ...preparedOptionFields };
};

export const validateBody = (payload) => {
    const schema = {
        type: 'object',
        properties: {
            startDate: {
                type: 'string',
            },
            endDate: {
                type: 'string',
            },
            ticker: {
                type: 'string',
            },
            batchSize: {
                type: 'number',
            },
            epoch: {
                type: 'number',
            },
        },
    };
    return new Validator().validate(payload, schema);
};

export default async (payload) => {
    const castedPayload = castToValuablePayload(payload);
    if (validateBody(castedPayload)) {
        try {
            return await axios
                .post('http://0.0.0.0:5000/calculate', castedPayload)
                .then((res) => res.data);
        } catch (error) {
            throw error.response ? error.response.status : error;
        }
    }
    throw new Error('validation error');
};
