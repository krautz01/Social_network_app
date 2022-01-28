export const requiredField = (value) => {
    if (value) return undefined ;
    return 'Fiels is required';
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};