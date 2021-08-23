const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

async function openDB() {
    return open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    })
}


async function setup() {
    const db = await openDB();
    await db.migrate({ force: 'last' });
    const users = await db.all('SELECT * FROM User');
    console.log('ALL USER  ', JSON.stringify(users, null, 2));

}

setup();