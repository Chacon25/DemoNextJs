import type { NextApiRequest, NextApiResponse } from 'next'
import { openDB } from '../../../migrations/open_file';
import { allUser } from '../../../mocks/alluser';


import Data from '../../../models/user'


export default async function getUserById(req: NextApiRequest, res: NextApiResponse) {

    const httpMethod = req.method;
    const db = await openDB();
    const Name = req.query.name;
    // const result = allUser.filter((dat) => dat.name === Name);
    const result = await db.get('select * from user where name =?', [Name]);
    const { name, email } = req.body;
    switch (httpMethod) {
        case 'GET':
            if (result) {
                res.status(200).json(result);
            }
            else {
                res.status(404).json({ message: `The user ${Name} don't exist` });
            }

            break;
        case 'PUT':
            res.status(200).json({
                Data
            });

            break;
        case 'DELETE':

            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${httpMethod} Not Allowed `)




    }

}
