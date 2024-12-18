import { Organization } from "../../types/types";
import { openDB } from "../config/sqlite";

export const OrganizationModel = {
    createOrganization: (cd_id: string, cd_secret: string, organization_name: string, organization_id: string) => {
        const db = openDB();
        const stmt = db.prepare(`
            INSERT INTO organization_detail (cd_id, cd_secret, organization_name, organization_id)
            VALUES (?, ?, ?, ?)
        `);
        return stmt.run(cd_id, cd_secret, organization_name, organization_id);
    },

    getOrganizationById: (id: string) => {
        const db = openDB();
        const stmt = db.prepare(`
            SELECT * FROM organization_detail WHERE organization_id = ?
        `);
        return stmt.get(id) as Organization;
    },

    getAllOrganizations: () => {
        const db = openDB();
        const stmt = db.prepare(`
            SELECT * FROM organization_detail
        `);
        return stmt.all() as Organization[];
    },

    deleteOrganization: (id: string) => {
        const db = openDB();
        const stmt = db.prepare(`
            DELETE FROM organization_detail WHERE organization_id = ?
        `);
        return stmt.run(id);
    },
};
