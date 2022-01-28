export const requiredField = (value) => {
    if (value) return undefined ;
    return 'Fiels is required';
};

export const maxLength30 = (value) => {
    if (value && value.length > 30) return 'Max length is 30 symbols';
    return undefined;
};

export const requiredField = (value) => {
    if (value) return undefined ;
    return 'Fiels is required';
};

