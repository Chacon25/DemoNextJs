
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export async function openDB() {
    return open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    })
}

export default class OpenDb {

    constructor(

    ) { openDB(); }

}
