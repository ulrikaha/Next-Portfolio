// check if the string is valid and not too long in sendEmail.ts
export const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== 'string' || value.length > maxLength) {
        return false;
    }
    return true;
}