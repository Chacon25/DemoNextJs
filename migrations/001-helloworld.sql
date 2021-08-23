-- Up

CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);




INSERT INTO User (name ,email) values ('Marco', 'Marco@gmail.com,' );
INSERT INTO User (name ,email) values ('Jade', 'Jade@gmail.com,' );

-- Down 
DROP TABLE User