export const success = (res, code, message, data) => {
    res.status(code).json({ status: 'success', message, data });
};

export const error = (res, code, message, data = null) => {
    res.status(code).json({ status: 'error', message, data });
};
