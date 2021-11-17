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
SELECT m.date, m.mood, m.comment
FROM mood m
LEFT JOIN users u
ON m.user_id = u.id
WHERE u.id = ['userID here']
AND date BETWEEN ['startDate'] AND ['endDate']
ORDER BY date ASC;

~ Left Join Example Btn users & exercise ~
SELECT e.date, e.type, e.duration
FROM exercise e
LEFT JOIN users u
ON e.user_id = u.id
WHERE u.id = ['userID here']
AND date BETWEEN ['startDate'] AND ['endDate']
ORDER BY date ASC;

*/
