import { Request, Response, NextFunction } from 'express';
import { openDB } from "../config/sqlite";
import { Organization } from '../../types/types';

declare global {
    namespace Express {
        interface Request {
            organization?: {
                id: string;
                name: string;
            };
        }
    }
}

// Middleware function
const validateHeadersMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const cdId = req.headers['cd-id'] as string | undefined;
    const cdSecret = req.headers['cd-secret'] as string | undefined;

    // Validate presence of headers
    if (!cdId || !cdSecret) {
        res.status(400).json({
            error: 'CD-ID and CD-Secret headers are required.'
        });
        return;
    }


    try {
        // Open the database connection
        const db = openDB();

        // Query to validate the headers
        const query = `
            SELECT id, organization_name 
            FROM organization_detail 
            WHERE cd_id = ? AND cd_secret = ?;
        `;
        const organization = db.prepare(query).get(cdId, cdSecret) as Organization;

        if (!organization) {
            // Invalid credentials
            res.status(401).json({
                error: 'Invalid CD-ID or CD-Secret.'
            });
            return;
        }

        // Attach organization info to the request object
        req.organization = {
            id: organization.id,
            name: organization.organization_name
        };

        // Proceed to the next middleware
        next();
    } catch (error) {
        console.error('Error validating headers:', error);
        res.status(500).json({ error: 'Internal server error.' });
        return;
    }
}

export default validateHeadersMiddleware