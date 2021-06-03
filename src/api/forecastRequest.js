import axios from 'axios';
import { Validator } from 'jsonschema';

export const validateBody = (p) => {
    const schema = {
        type: 'object',
        properties: {
            startDate: {
                type: 'string',
            },
            endDate: {
                type: 'string',
            },
        },
    };
    const validator = new Validator();
    return validator.validate(p, schema);
};

export default async (payload) => {
    if (validateBody(payload)) {
        try {
            return await axios
                .post('http://0.0.0.0:5000/calculate', payload)
                .then((res) => res.data);
        } catch (error) {
            throw error.response ? error.response.status : error;
        }
    }
    throw new Error('validation error');
};
