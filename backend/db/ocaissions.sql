CREATE TABLE occasions(
id INT AUTO_INCREMENT NOT NULL,
place_id INT,
FOREIGN KEY (place_id) REFERENCES place(id),
type Varchar(255),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);