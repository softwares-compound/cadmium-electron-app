type MessageListener = (message: any) => void;

let socket: WebSocket | null = null;
let isConnected = false;
const messageListeners: MessageListener[] = [];

// *********************************
// ! Initialization of WebSocket connection is done in App.tsx
// *********************************

/**
 * Connect to the WebSocket server.
 * @param url - The WebSocket server URL.
 */
export const connectWebSocket = (url: string): void => {
    if (!socket) {
        socket = new WebSocket(url);

        socket.onopen = (): void => {
            console.log("WebSocket connection established!");
            isConnected = true;
        };

        socket.onmessage = (event: MessageEvent): void => {
            const chunk = JSON.parse(event.data);
            console.log("Received message from WebSocket:", chunk);

            // Notify all listeners of the new message
            messageListeners.forEach((listener) => listener(chunk));
        };

        socket.onclose = (): void => {
            console.log("WebSocket connection closed.");
            isConnected = false;
            socket = null;
        };

        socket.onerror = (error: Event): void => {
            console.error("WebSocket error:", error);
        };
    }
};

/**
 * Send a message through the WebSocket connection.
 * @param message - The message to send.
 */
export const sendMessage = (message: object): void => {
    if (socket && isConnected) {
        socket.send(JSON.stringify(message));
    } else {
        console.error("WebSocket is not connected!");
    }
};

/**
 * Add a listener to handle incoming WebSocket messages.
 * @param listener - A function to handle messages.
 */
export const addMessageListener = (listener: MessageListener): void => {
    messageListeners.push(listener);
};

/**
 * Remove a listener for WebSocket messages.
 * @param listener - The listener function to remove.
 */
export const removeMessageListener = (listener: MessageListener): void => {
    const index = messageListeners.indexOf(listener);
    if (index > -1) {
        messageListeners.splice(index, 1);
    }
};

/**
 * Disconnect the WebSocket connection.
 */
export const disconnectWebSocket = (): void => {
    if (socket) {
        socket.close();
        socket = null;
        isConnected = false;
    }
};
