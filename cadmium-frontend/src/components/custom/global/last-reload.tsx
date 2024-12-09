import { RefreshCcwIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const ReloadWithTimestamp: React.FC = () => {
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
    const [timeAgo, setTimeAgo] = useState<string>("A few seconds ago");

    // Function to calculate time ago
    const calculateTimeAgo = (date: Date) => {
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (diffInSeconds < 60) {
            return "A few seconds ago";
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} hour${hours === 1 ? "" : "s"} ago`;
        } else {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days} day${days === 1 ? "" : "s"} ago`;
        }
    };

    // Update the time ago periodically
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeAgo(calculateTimeAgo(lastUpdated));
        }, 10000); // Check every 10 seconds instead of every second

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [lastUpdated]);

    // Handle reload
    const handleReload = () => {
        setLastUpdated(new Date()); // Update last updated time
        setTimeAgo("A few seconds ago"); // Reset the text immediately
        window.location.reload(); // Reload the page
    };

    return (
        <div className="flex items-center space-x-4 px-2">
            <span className="text-sm text-muted-foreground">
                Last updated: {timeAgo}
            </span>
            <RefreshCcwIcon onClick={handleReload} className="cursor-pointer W-4 h-4" />
        </div>
    );
};

export default ReloadWithTimestamp;
