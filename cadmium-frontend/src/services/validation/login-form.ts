import { LoginFormData, LoginFormErrors } from "@/types/type";


/**
 * Validates the given form data and returns an object containing any validation errors.
 * 
 * @param formData - The form data to validate.
 * @returns An object containing validation errors, if any.
 */
export const validateLoginForm = (formData: LoginFormData): LoginFormErrors => {
    const errors: LoginFormErrors = {};
    if (!formData.clientId.trim()) {
        errors.clientId = "Client ID is required.";
    }
    if (!formData.clientSecret.trim()) {
        errors.clientSecret = "Client Secret is required.";
    }
    return errors;
};

