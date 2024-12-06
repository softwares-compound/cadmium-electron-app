// src/preload/types.ts
export type IPCChannels = 'toMain' | 'fromMain';

export interface ToMainPayload {
    message: string;
}

export interface FromMainPayload {
    response: string;
}
