CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255),
    is_deleted TINYINT DEFAULT 0,
    -- primary key must be unique for each record and there must be only one primary key
    PRIMARY KEY (id)
);