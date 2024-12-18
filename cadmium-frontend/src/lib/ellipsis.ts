/**
 * Truncates a string based on specified start and end character counts.
 * Truncates only if the sum of start characters, end characters, and ellipsis 
 * is less than the total string length.
 *
 * @param text - The input string to truncate.
 * @param startChar - Number of characters to keep from the start.
 * @param endChar - Number of characters to keep from the end.
 * @returns The truncated string or the original string if no truncation is needed.
 */
export default function addEllipsis(
    text: string | null | undefined,
    startChar: number,
    endChar: number
): string {
    // Handle null or undefined inputs
    if (text == null) {
        return "";
    }

    // Validate input arguments
    if (typeof startChar !== "number" || startChar < 0 ||
        typeof endChar !== "number" || endChar < 0) {
        throw new Error("Start and end character counts must be non-negative numbers.");
    }

    // Calculate total characters including ellipsis
    const ellipsisLength = 3;
    const totalReservedChars = startChar + endChar + ellipsisLength;

    // If text length is less than or equal to total reserved characters, return original text
    if (text.length <= totalReservedChars) {
        return text;
    }

    // Truncate the string
    return text.slice(0, startChar) + "..." + text.slice(-endChar);
}