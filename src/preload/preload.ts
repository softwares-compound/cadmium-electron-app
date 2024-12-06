// src/preload/preload.ts
import { contextBridge, ipcRenderer } from 'electron';
import { IPCChannels, ToMainPayload, FromMainPayload } from '../types/types';


contextBridge.exposeInMainWorld('electronAPI', {
    sendMessage: (channel: IPCChannels, data: ToMainPayload) => {
        const validChannels: IPCChannels[] = ['toMain'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    receiveMessage: (channel: IPCChannels, callback: (data: FromMainPayload) => void) => {
        const validChannels: IPCChannels[] = ['fromMain'];
        if (validChannels.includes(channel)) {
            ipcRenderer.on(channel, (event, data: FromMainPayload) => callback(data));
        }
    },
});
