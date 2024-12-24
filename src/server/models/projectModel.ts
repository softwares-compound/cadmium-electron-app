import { Project } from "../../types/types";
import { openDB } from "../config/sqlite";

export const ProjectModel = {
    createProject: (name: string, description: string, project_id: string, organization_id: string) => {
        const db = openDB();
        const stmt = db.prepare(`
            INSERT INTO projects (name, description, project_id, organization_id)
            VALUES (?, ?, ?, ?)
        `);
        console.log("project_id ===>>", project_id);
        return stmt.run(name, description, project_id, organization_id);
    },

    getProjectById: (id: string): any => {
        const db = openDB();
        const stmt = db.prepare(`
            SELECT * FROM projects WHERE project_id = ?
        `);
        console.log("stmt ===>>", stmt);
        return stmt.get(id);
    },

    getAllProjects: (): any[] => {
        const db = openDB();
        const stmt = db.prepare(`
            SELECT * FROM projects
        `);
        return stmt.all();
    },

    getProjectsByOrganization: (organization_id: number): any[] => {
        const db = openDB();
        const stmt = db.prepare(`
            SELECT * FROM projects WHERE organization_id = ?
        `);
        return stmt.all(organization_id);
    },

    deleteProject: (id: number): void => {
        const db = openDB();
        const stmt = db.prepare(`
            DELETE FROM projects WHERE project_id = ?
        `);
        stmt.run(id);
    },
    updateProjectById: (id: number, name: string, description: string): any => {
        const db = openDB();
        const stmt = db.prepare(`
            UPDATE projects 
            SET name = ?, description = ?
            WHERE project_id = ?
        `);
        return stmt.run(name, description, id);
    },
};

