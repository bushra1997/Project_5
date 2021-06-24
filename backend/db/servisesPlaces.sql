CREATE TABLE servisesPlaces(
id INT AUTO_INCREMENT NOT NULL,
costServises VARCHAR(255),
place_id INT,
FOREIGN KEY (place_id ) REFERENCES place(id),
extraServices_id INT,
FOREIGN KEY (extraServices_id ) REFERENCES extraServices(id),
PRIMARY KEY (id)
);