import { Project } from "../../types/types";
import { openDB } from "../config/sqlite";

export const ProjectModel = {
    createProject: (name: string, description: string, project_id: string, organization_id: string) => {
        const db = openDB();
        const stmt = db.prepare(`
            INSERT INTO projects (name, description, project_id, organization_id)
            VALUES (?, ?, ?, ?)
        `);
        return stmt.run(name, description, project_id, organization_id);
    },

    getProjectById: (id: number): any => {
        const db = openDB();
        const stmt = db.prepare(`
            SELECT * FROM projects WHERE id = ?
        `);
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
            DELETE FROM projects WHERE id = ?
        `);
        stmt.run(id);
    },
};

