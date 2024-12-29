import { useLogStore } from "@/stores/useLogStore";
import React from "react";


const StreamingComponent: React.FC = () => {
    const { logStreamingData } = useLogStore();


    return (
        <div>
            <h1>Streaming Data</h1>
            <pre>{logStreamingData?.chunk}</pre> {/* Display the streamed message */}
        </div>
    );
};

export default StreamingComponent;
