CREATE TABLE rating (
id INT AUTO_INCREMENT NOT NULL,
place_id INT,
FOREIGN KEY (place_id) REFERENCES place(id),
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id),
rate INT,
is_deleted TINYINT DEFAULT 0,
-- primary key must be unique for each record and there must be only one primary key
PRIMARY KEY (id)
);