// src/preload/types.ts
export type IPCChannels = 'toMain' | 'fromMain';

export interface ToMainPayload {
    message: string;
}

export interface FromMainPayload {
    response: string;
}


// ** ORGANIZATION TYPE **
export interface Organization {
    id: number;
    cd_id: string;
    cd_secret: string;
    created_at: string;
    organization_id: string;
    organization_name: string;
}


// ** PROJECT TYPE **
export interface Project {
    id: string;
    name: string;
    description: string;
    organizationId: string;
    isConnectedToRemote: boolean;
    remoteUrl: string;
}