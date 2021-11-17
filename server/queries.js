/*

~ Create users table ~
CREATE TABLE users (
id SERIAL PRIMARY KEY,
first_name varchar(20) NOT NULL,
last_name varchar(20) NOT NULL,
username varchar(50) NOT NULL UNIQUE,
password varchar(50) NOT NULL
);


~ Create mood table ~
CREATE TABLE mood (
id SERIAL PRIMARY KEY,
date DATE NOT NULL,
mood INT NOT NULL,
comment varchar(500),
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id)
);


~ Create exercise table ~
CREATE TABLE exercise (
id SERIAL PRIMARY KEY,
date DATE NOT NULL,
type varchar NOT NULL,
duration INT,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id)
);


~ Left Join Example Btn users & mood ~
SELECT m.* 
FROM mood m
LEFT JOIN users u
ON m.user_id = u.id
WHERE u.username = ['username here'];


~ Left Join Example Btn users & exercise ~
SELECT e.* 
FROM exercise e
LEFT JOIN users u
ON e.user_id = u.id
WHERE u.username = ['username here'];


~ Insert Into Table 'exercise' Example ~
INSERT INTO exercise (date, type, duration, user_id)
VALUES ('YYYY-MM-DD', ['exercise string'], [duration INT], [user_id INT])
RETURNING type, duration;
******* replace VALUES with ($1, $2, $3, $4) when querying from controllers *******


~ Insert Into Table 'mood' Example ~
INSERT INTO mood (date, mood, comment, user_id)
VALUES ('YYYY-MM-DD', [mood INT], ['your string here'], [user_id INT])
RETURNING mood, comment;
******* replace VALUES with ($1, $2, $3, $4) when querying from controllers *******

~ Request specific data with conditions ~
SELECT duration FROM exercise
WHERE date = 'YYYY-MM-DD' AND user_id = 2;


*/