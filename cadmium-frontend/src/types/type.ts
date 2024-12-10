
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
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined
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
//! ***************************** LOGS TYPES *********************************** //
// ****************************************************************************** //

// Type for each formatted response in ragInference
export interface FormattedRagResponse {
    type: "markdown" | "code";
    value: string;
}

// Type for rag_response object
export interface RagResponse {
    formatted_rag_response: FormattedRagResponse[];
    application_id: string;
    created_at: string; // ISO 8601 format
    query: string;
}

// Type for Log Entry
export interface LogTableEntry {
    id: string;
    organizationId: string;
    applicationId: string;
    error: string;
    url: string;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "default";
    createdAt: string; // ISO 8601 format
    updatedAt: string; // ISO 8601 format
    ragInference: { rag_response: RagResponse | null }; // Parsed JSON or null if parsing fails
}

// Example: Array of log entries
export type LogData = LogTableEntry[];

export interface LogStoreState {
    loading: boolean;
    setLoading: (loading: boolean) => void;
    openSlideOver: boolean;
    setOpenSlideOver: (openSlideOver: boolean) => void;
    selectedLog: LogTableEntry | null;
    setSelectedLog: (selectedLog: LogTableEntry) => void;
}