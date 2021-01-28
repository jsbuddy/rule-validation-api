import * as response from "../lib/response";
import { getNestedValue, resolveCondition } from "../lib/utils";

export const welcome = (_, res) => {
    return response.success(res, 200, 'My Rule-Validation API.', {
        name: 'Jude Francis',
        github: '@jsbuddy',
        email: 'judecodes@gmail.com',
        mobile: '+2347066198768',
        twitter: '@judecodes'
    });
};

export const validateRule = (req, res) => {
    const { rule, data } = req.body;
    const field_value = getNestedValue(data, rule.field.split('.'));

    if (!field_value) return response.error(res, 400, `field ${ rule.field } is missing from data.`);

    if (resolveCondition(rule.condition, rule.condition_value, field_value)) {
        return response.success(res, 200, `field ${ rule.field } successfully validated.`, {
            validation: { error: false, field_value, ...rule }
        });
    } else {
        return response.error(res, 400, `field ${ rule.field } failed validation.`, {
            validation: { error: true, field_value, ...rule }
        });
    }
};
