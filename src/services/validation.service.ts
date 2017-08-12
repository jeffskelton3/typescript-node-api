export class ValidationService {
    static isValid(params: any, requiredFields: any) {
        const missing = Object.keys(requiredFields)
            .map(k => {
                if (!params[k]) {
                    return k;
                }
            });
        return {
            isValid: missing.length === 0,
            message: missing.length > 0 ? `Error. The following required fields are missing: ${missing.join(', ')}` : null
        }
    }
}