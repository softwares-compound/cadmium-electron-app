// cadmium-frontend/src/components/ServerTest.tsx

import { ThemeToggle } from '@/components/custom/theme/theme-togggle';
import React, { useEffect, useState } from 'react';

interface ApiResponse {
    message: string;
}

const ServerTest: React.FC = () => {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:3001/api');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result: ApiResponse = await response.json();
            setData(result);
        } catch (err: Error | any) {
            setError(err.message || 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // Alternatively, you can fetch data on a button click instead of on mount
    }, []);

    return (
        <div style={styles.container}>
            <h2>Express Server Test</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={styles.error}>Error: {error}</p>}
            {data && <p>Response from Server: {data.message}</p>}
            {/* Optional: Add a button to re-fetch data */}
            <button onClick={fetchData} style={styles.button} >
                Refresh
            </button>
            <ThemeToggle />
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        marginTop: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '400px',
        textAlign: 'center',
    },
    error: {
        color: 'red',
    },
    button: {
        marginTop: '10px',
        padding: '8px 16px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '4px',
    },
};

export default ServerTest;
