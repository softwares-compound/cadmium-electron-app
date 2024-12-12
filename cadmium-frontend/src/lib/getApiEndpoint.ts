/**
 * Extracts the API endpoint from the given URL.
 * @example
 * const url = "https://example.azurewebsites.net/api/invoice/invoices/?search=&page=1&status=&invoice_date=&due_date=&customer_name=&employee_name=&invoice_number=";
 * const apiEndpoint = getApiEndpoint(url);
 * console.log(apiEndpoint); // Output: /api/invoice/invoices
 * @param {string} url - A URL that may contain query parameters.
 * @returns {string} The API endpoint without query parameters.
 */
export function getApiEndpoint(url: string): string {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.pathname;
    } catch (error) {
        console.error("Invalid URL:", error);
        return "";
    }
}

