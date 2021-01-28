import * as response from '../lib/response';
import { typeOf } from '../lib/utils';

export default (req, res, next) => {
    // Check if rule was passed
    if (!req.body.rule) {
        return response.error(res, 400, 'rule is required.');
    }
    // Check if rule is an object
    if (typeOf(req.body.rule) !== 'object') {
        return response.error(res, 400, 'rule should be an object.');
    }
    // Check if required properties exist
    if (!req.body.rule.field || !req.body.rule.condition || !req.body.rule.condition_value) {
        return response.error(res, 400, 'unable to process data.');
    }
    // Check if data was passed
    if (!req.body.data) {
        return response.error(res, 400, 'data is required.');
    }
    // Check if data is an object, array or string
    if (!typeOf(req.body.data).match(/object|array|string/gi)) {
        return response.error(res, 400, 'data should be one of type object, array, or string.');
    }
    next();
};
