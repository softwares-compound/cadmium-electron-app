// src/server/controllers/get-clients.ts

import { Organization } from "../../types/types";
import { openDB } from "../config/sqlite";
import { Request, Response, NextFunction } from "express";


// Controller to handle fetching clients
const handleGetOrgList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Open the SQLite database
        const db = openDB();

        // Prepare and execute the SELECT statement
        const stmt = db.prepare(`
            SELECT id, cd_id, cd_secret, created_at
            FROM organization_detail
            ORDER BY created_at DESC
        `);

        const clients: Organization[] = stmt.all() as Organization[];

        // Respond with the list of clients
        res.status(200).json({ clients });
    } catch (error: any) {
        console.error("[Error] =====>>", error);

        // Handle database errors
        res.status(500).json({
            error: "Failed to retrieve clients.",
            details: error.message || "An unexpected error occurred.",
        });
    }
};

export default handleGetOrgList;
