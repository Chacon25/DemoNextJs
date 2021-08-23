

import { sql_query } from '../../lib/db'

const handler = async (_: any, res: any) => {
    try {
        // console.log(process.env)
        const result = await sql_query(`
        SELECT * FROM user
        `);

        return res.json(result);
    } catch (e: any) {
        res.status(500).json({ message: e.message });

    }


}

export default handler;