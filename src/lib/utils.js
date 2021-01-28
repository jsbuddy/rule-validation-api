export const typeOf = (value) => value.constructor.name.toLowerCase();

export const getNestedValue = (data, keys) => {
    return keys.reduce((acc, e) => acc ? acc[e] : null, data);
};

export const resolveCondition = (condition, condition_value, field_value) => {
    switch (condition) {
        case 'eq': return field_value === condition_value;
        case 'neq': return field_value !== condition_value;
        case 'gt': return field_value > condition_value;
        case 'gte': return field_value >= condition_value;
        case 'contains': return field_value.includes(condition_value);
        default: return false;
    }
};
