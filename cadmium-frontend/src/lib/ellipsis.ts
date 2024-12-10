/**
 * Truncates a string to a specified length and appends an ellipsis ("...").
 * Ensures the total character count does not exceed `maxLength`.
 * Optionally, truncates to keep the last few characters of the string.
 *
 * @param text - The input string to truncate.
 * @param maxLength - The maximum allowed length of the string including the ellipsis.
 * @param keepEnd - If true, keeps the last few characters of the string.
 * @returns The truncated string with an ellipsis or the original string if no truncation is needed.
 */
export default function addEllipsis(
    text: string | null | undefined,
    maxLength: number,
    keepEnd: boolean = false
): string {
    try {
        // Handle null or undefined inputs
        if (text == null) {
            return "";
        }

        // Ensure the maxLength is a positive integer
        if (typeof maxLength !== "number" || maxLength <= 0) {
            throw new Error("maxLength must be a positive number.");
        }

        // If text length is less than or equal to maxLength, no truncation is needed
        if (text.length <= maxLength) {
            return text;
        }

        // If maxLength is less than or equal to 3, return only ellipsis
        if (maxLength <= 3) {
            return ".".repeat(maxLength);
        }

        // Truncate while ensuring the total length does not exceed maxLength
        if (keepEnd) {
            // Keep the last characters of the string
            return "..." + text.slice(-(maxLength - 3));
        } else {
            // Keep the starting characters of the string
            return text.slice(0, maxLength - 3) + "...";
        }
    } catch (error: Error | any) {
        console.error("Error in createEllipsis:", error.message);
        return ""; // Return an empty string in case of error
    }
}
