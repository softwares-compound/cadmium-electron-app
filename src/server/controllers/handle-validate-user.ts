import { openDB } from "../config/sqlite";
import { Request, Response } from "express";

const validateCredentials = async (req: Request, res: Response): Promise<void> => {
    try {
        // Extract credentials from the request body
        const { cd_id, cd_secret } = req.body;

        if (!cd_id || !cd_secret) {
            res.status(400).json({ error: "cd_id and cd_secret are required." });
            return;
        }

        // Open the SQLite database and query for the credentials
        const db = openDB();
        const queryStatement = db.prepare(
            `SELECT * FROM organization_detail WHERE cd_id = ? AND cd_secret = ?`
        );

        const result = queryStatement.get(cd_id, cd_secret);
        console.log("Result----??>>>>>>:", result);
        if (result) {
            // Credentials are valid
            res.status(200).json({ isValid: true, return: result });
        } else {
            // Credentials are invalid
            res.status(401).json({ isValid: false });
        }
    } catch (error: any) {
        console.error("Validation Error:", error.message);

        // Default to a 500 Internal Server Error for other cases
        res.status(500).json({
            error: error.message || "An unexpected error occurred.",
        });
    }
};

export default validateCredentials;
