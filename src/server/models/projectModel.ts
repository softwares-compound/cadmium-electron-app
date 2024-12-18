import { Project } from "../../types/types";
import { openDB } from "../config/sqlite";

export const ProjectModel = {
    createProject: (name: string, description: string, organization_id: number) => {
        const db = openDB();
        const stmt = db.prepare(`
            INSERT INTO projects (name, description, organization_id)
            VALUES (?, ?, ?)
        `);
        return stmt.run(name, description, organization_id, 0, "") as unknown as Project;
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

