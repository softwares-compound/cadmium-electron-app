
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
//! ***************************** PROJECTS TYPES *********************************** //
// ****************************************************************************** //

export type ProjectCardData = {
    name: string
    value: number | string
    variant?: "default" | "destructive" | "outline" | "secondary" | "success" | null | undefined
}
export type Path = string
export type ProjectCardProps = {
    id: string
    src: Path
    alt: string
    title: string
    description: string
    data: ProjectCardData[]
    onOpen: () => void
}

export interface TerminalDrawerStoreState {
    loading: boolean;
    setLoading: (loading: boolean) => void;
    openDrawer: boolean;
    setOpenDrawer: (openDrawer: boolean) => void;
}















// ****************************************************************************** //
//! ***************************** LOGIN TYPES *********************************** //
// ****************************************************************************** //