// react-app/src/types/electron.d.ts
export { };

import { ToMainPayload, FromMainPayload } from '../../../src/types/types';
declare global {
    interface Window {
        electronAPI: {
            sendMessage: (channel: 'toMain', data: ToMainPayload) => void;
            receiveMessage: (channel: 'fromMain', callback: (data: FromMainPayload) => void) => void;
        };
    }
}
