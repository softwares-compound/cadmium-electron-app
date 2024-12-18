// src/server/controllers/get-clients.ts

import { Request, Response, NextFunction } from "express";
import { ProjectModel } from "../models/projectModel";


// Controller to handle fetching clients
const handleCreateProject = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

        const project = ProjectModel.createProject(req.body.name, req.body.description, req.body.organization_id);
        res.status(200).json(project);
    } catch (error: any) {
        console.error("[Error] =====>>", error);

        // Handle database errors
        res.status(500).json({
            error: "Failed to retrieve clients.",
            details: error.message || "An unexpected error occurred.",
        });
    }
};

export default handleCreateProject;
