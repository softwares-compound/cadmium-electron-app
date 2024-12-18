import { initializeDB, openDB } from "../config/sqlite";
import { CLOUD_AXIOS_INSTANCE } from "../config/axios";
import { Request, Response, NextFunction } from "express";
import { OrganizationModel } from "../models/organizationModel";
import { cli } from "winston/lib/winston/config";

const handleLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Parse the incoming request body
        const body = req.body;
        console.log("Request Body:", body);

        if (!body.clientId || !body.clientSecret) {
            res.status(400).json({ error: "Client ID and Client Secret are required." });
            return; // Ensure no further execution
        }

        // Fetch data from the external API
        const resp1 = await CLOUD_AXIOS_INSTANCE.get("/applications", {
            headers: {
                "Content-Type": "application/json",
                "CD-ID": body.clientId,
                "CD-Secret": body.clientSecret,
            },
        });
        const resp2 = await CLOUD_AXIOS_INSTANCE.get("/organizations", {
            headers: {
                "Content-Type": "application/json",
                "CD-ID": body.clientId,
                "CD-Secret": body.clientSecret,
            },
        })
        const { id: organization_id, org_name: organization_name } = resp2.data;
        try {
            // Open the SQLite database and insert the client credentials
            OrganizationModel.createOrganization(body.clientId, body.clientSecret, organization_name, organization_id);
            console.log("Client credentials successfully inserted into the database.", body.clientId, body.clientSecret);
        } catch (err: any) {
            if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
                console.error("Duplicate entry error:", err.message);
                res.status(400).json({
                    error: "Client ID or Client Secret already exists.",
                });
                return; // Ensure no further execution
            }
            throw err; // Re-throw other errors
        }

        // Return the external API response
        res.status(200).json({
            clientId: body.clientId,
            clientSecret: body.clientSecret,
            organization_name: organization_name,
            organization_id: organization_id,
        });
    } catch (error: any) {
        console.error("[Error] =====>>", error);
        // Distinguish between axios and internal errors
        if (error.response && error.response.status) {
            res.status(error.response.status).json({
                error: error.response.data?.error || "External API Error",
            });
            return;
        }

        // Default to a 500 Internal Server Error for other cases
        res.status(500).json({
            error: error.message || "An unexpected error occurred.",
        });
    }
};

export default handleLogin