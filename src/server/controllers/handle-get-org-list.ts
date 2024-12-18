// src/server/controllers/get-clients.ts

import { Organization } from "../../types/types";
import { openDB } from "../config/sqlite";
import { Request, Response, NextFunction } from "express";
import { OrganizationModel } from "../models/organizationModel";


// Controller to handle fetching clients
const handleGetOrgList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        console.log("Inside handleGetOrgList");
        const clients: Organization[] = OrganizationModel.getAllOrganizations();
        console.log("Organization List===>> ", clients);
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
