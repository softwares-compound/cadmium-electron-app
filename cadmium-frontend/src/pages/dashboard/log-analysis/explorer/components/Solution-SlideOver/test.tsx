import { addMessageListener, disconnectWebSocket, removeMessageListener } from "@/socket/socket";
import React, { useEffect, useState } from "react";


const StreamingComponent: React.FC = () => {
    const [streamedMessage, setStreamedMessage] = useState("");

    useEffect(() => {

        // Define a listener to handle chunks
        const handleChunk = (chunk: string) => {
            console.log("Received message from WebSocket:", chunk);
            setStreamedMessage((prev) => prev + chunk); // Append each chunk to the current message
        };

        // Add the listener
        addMessageListener(handleChunk);

        // Cleanup on component unmount
        return () => {
            removeMessageListener(handleChunk);
            disconnectWebSocket();
        };
    }, []);

    return (
        <div>
            <h1>Streaming Data</h1>
            <pre>{streamedMessage}</pre> {/* Display the streamed message */}
        </div>
    );
};

export default StreamingComponent;
