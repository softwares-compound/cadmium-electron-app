// src/services/exampleService.ts
const fetchMessage = async (): Promise<string> => {
    // Simulate fetching data from a database or external API
    return 'Hello from the Express server running on Electron!';
};

export default {
    fetchMessage,
};
