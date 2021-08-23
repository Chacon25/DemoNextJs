import type { NextApiRequest, NextApiResponse } from 'next'
import { openDB } from '../../migrations/open_file';
import { allUser } from '../../mocks/alluser';

import Data from '../../models/user'


export default async function getUser
    (
        req: NextApiRequest,
        res: NextApiResponse
    ) {
    const db = await openDB();
    const users = await db.all('SELECT * FROM User');
    const httpMethod = req.method;
    const { name, email } = req.body;
    switch (httpMethod) {
        case 'GET':
            res.status(200).json(users);
            break;
        case 'POST':
            res.status(200).json({
                Data
            });

            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${httpMethod} Not Allowed `)




    }

}
