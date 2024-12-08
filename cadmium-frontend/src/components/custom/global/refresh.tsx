import React from "react";
import { RefreshCw } from "lucide-react"; // Import the refresh icon

const RefreshButton: React.FC = () => {
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <button
            onClick={handleRefresh}
            className="fixed bottom-4 right-4 z-50 p-1 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/80 transition-all"
            aria-label="Refresh"
        >
            <RefreshCw className="h-4 w-4" />
        </button>
    );
};

export default RefreshButton;
