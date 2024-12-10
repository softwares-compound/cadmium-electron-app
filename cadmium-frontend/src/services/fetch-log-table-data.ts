import { CLOUD_AXIOS_INSTANCE } from '@/axios/axios';
import { LogTableEntry, RagResponse } from '@/types/type';
/**
 * Fetches the log table data for a given application.
 *
 * @param {string} cd_id - The ID of the Cadmium instance.
 * @param {string} cd_secret - The secret of the Cadmium instance.
 * @param {string} application_id - The ID of the application.
 * @returns {Promise<LogTableEntry[] | null>} A promise resolving to an array of log table entries or null if there was an error.
 */
export const fetchLogTableData = async (cd_id: string, cd_secret: string, application_id: string): Promise<LogTableEntry[] | null> => {
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
        page: 1,
        limit: 15,
    };

    try {
        const response = await CLOUD_AXIOS_INSTANCE.post(
            '/graphql',
            { query, variables },
            { headers }
        );

        if (response.data.errors) {
            console.error('Error fetching logs:', response.data.errors);
            return null;
        }

        // Parse ragInference for each log entry
        const logs: LogTableEntry[] = response.data.data.logs.map((log: any) => ({
            ...log,
            ragInference: log.ragInference ? parseRagInference(log.ragInference) : null,
        }));

        return logs;
    } catch (error) {
        console.error('Error during the API request:', error);
        return null;
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

