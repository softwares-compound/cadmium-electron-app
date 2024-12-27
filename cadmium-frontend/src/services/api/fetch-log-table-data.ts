import { CLOUD_AXIOS_INSTANCE } from '@/axios/axios';
import { useLogStore } from '@/stores/useLogStore';
import { LogTableEntry, RagResponse } from '@/types/type';
/**
 * Fetches the log table data for a given application.
 *
 * @param {string} cd_id - The ID of the Cadmium instance.
 * @param {string} cd_secret - The secret of the Cadmium instance.
 * @param {string} application_id - The ID of the application.
 * @returns {Promise<LogTableEntry[] | null>} A promise resolving to an array of log table entries or null if there was an error.
 */
export const fetchLogTableData = async (application_id: string): Promise<LogTableEntry[] | null> => {
    const { setLoading, limit, page, appendTableData } = useLogStore.getState(); // Zustand state for log
    const cd_id = localStorage.getItem("cd_id") ?? "";
    const cd_secret = localStorage.getItem("cd_secret") ?? "";
    console.log("application_id ===>>", application_id);
    const headers = {
        'Content-Type': 'application/json',
        'CD-ID': cd_id,
        'CD-Secret': cd_secret,
        'Application-ID': application_id,
    };

    const query = ` 
    query GetLogs($page: Int, $limit: Int) {
        logs(page: $page, limit: $limit) {
            id
            organizationId
            applicationId
            error
            url
            method
            createdAt
            updatedAt
            ragInference
        }
    }
  `;

    const variables = {
        page: page,
        limit: limit,
    };

    try {
        setLoading(true);
        const response = await CLOUD_AXIOS_INSTANCE.post(
            '/graphql',
            { query, variables },
            { headers }
        );
        console.log("response.data.data.logs =-==-=-=-=-=-===>>", response.data.data.logs);
        if (response.data.errors) {
            console.error('Error fetching logs:', response.data.errors);
            return null;
        }

        // Parse ragInference for each log entry
        const logs: LogTableEntry[] = response.data.data.logs.map((log: any) => ({
            ...log,
            ragInference: log.ragInference ? parseRagInference(log.ragInference) : null,
        }));
        appendTableData(logs);
        return logs;
    } catch (error) {
        console.error('Error during the API request:', error);
        return null;
    } finally {
        setLoading(false);
    }
};

/**
 * Parses the ragInference string into a RagResponse object.
 *
 * @param {string} ragInference - The string to parse.
 * @returns {RagResponse | null} The parsed RagResponse object or null if there was an error.
 */
const parseRagInference = (ragInference: string): RagResponse | null => {
    try {
        return JSON.parse(ragInference) as RagResponse;
    } catch (error) {
        console.error('Failed to parse ragInference:', error);
        return null;
    }
};

