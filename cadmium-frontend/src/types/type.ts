
// ****************************************************************************** //
//! ***************************** LOGIN TYPES *********************************** //
// ****************************************************************************** //
export interface LoginFormData {
    clientId: string;
    clientSecret: string;
}

export interface LoginFormErrors {
    clientId?: string;
    clientSecret?: string;
}

export interface LoginState {
    formData: LoginFormData;
    errors: LoginFormErrors;
    loading: boolean;
    setFormData: (field: keyof LoginFormData, value: string) => void;
    setErrors: (errors: LoginFormErrors) => void;
    setLoading: (loading: boolean) => void;
    clearErrors: (field: keyof LoginFormErrors) => void;
}



// ****************************************************************************** //
//! ***************************** ORGANIZATION TYPES *********************************** //
// ****************************************************************************** //

export interface Organization {
    id: number;
    cd_id: string;
    cd_secret: string;
    created_at: string;
}











// ****************************************************************************** //
//! ***************************** LOGIN TYPES *********************************** //
// ****************************************************************************** //

















// ****************************************************************************** //
//! ***************************** LOGIN TYPES *********************************** //
// ****************************************************************************** //