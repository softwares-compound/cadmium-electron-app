// src/server/controllers/get-clients.ts

import { Request, Response, NextFunction } from "express";
import { ProjectModel } from "../models/projectModel";
import path from "path";
import fs from 'fs';


// Controller to handle fetching clients
const handleCreateProject = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

        console.log({
            project_name: req.body.project_name,
            project_description: req.body.project_description,
            project_id: req.body.project_id,
            organization_id: req.body.organization_id
        })
        if (!req.body.project_name || !req.body.project_description || !req.body.project_id || !req.body.organization_id) {
            res.status(400).json({ error: "project_name, project_description, project_id and organization_id are required." });
            return;
        }
        const project = ProjectModel.createProject(req.body.project_name, req.body.project_description, req.body.project_id, req.body.organization_id);
        console.log("Project===>> ", project);

        if (!project) {
            res.status(500).json({ error: "Failed to create project." });
            return;
        }

        const PROJECT_PATH = path.resolve(__dirname, `../../../target-codes/${project.project_id}`);
        console.log("******------>>>>   ", PROJECT_PATH);
        if (!fs.existsSync(PROJECT_PATH)) {
            fs.mkdirSync(PROJECT_PATH, { recursive: true });
        }

        res.status(200).json(project);
    } catch (error: any) {
        console.error("[Error] =====>>", error);

        // Handle database errors
        res.status(500).json({
            error: error.message || "Failed to create project.",
            details: error || "An unexpected error occurred.",
        });
    }
};

export default handleCreateProject;
