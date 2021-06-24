CREATE TABLE favorite (
    id INT AUTO_INCREMENT NOT NULL,
    place_id INT,
    FOREIGN KEY (place_id) REFERENCES place(id),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    rating_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    age INT(3),
    email VARCHAR(255),
    country VARCHAR(255),
    password VARCHAR(255),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    created_at DATETIME,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);