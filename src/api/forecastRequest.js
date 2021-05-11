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

export default async (payload, authData) => {
    if (validateBody(payload) && authData) {
        try {
            const response = await axios.post(
                'http://2v7jd.mocklab.io/requestForecast',
                payload,
                {
                    auth: {
                        username: authData.user,
                        password: authData.password,
                    },
                }
            );
            return response.data;
        } catch (error) {
            throw error.response ? error.response.status : error;
        }
    }
    throw new Error('validation error');
};
