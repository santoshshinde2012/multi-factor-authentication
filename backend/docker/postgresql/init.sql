-- Insert initial record in User Table 
CREATE EXTENSION IF NOT EXISTS postgis;

-- Create Table
CREATE TABLE User (
    id VARCHAR2(36) PRIMARY KEY,
    name VARCHAR2(100) NOT NULL,
    country VARCHAR2(100) NOT NULL,
    subject VARCHAR2(200) NOT NULL,
    email VARCHAR2(100) NOT NULL,
    body VARCHAR2(400) NOT NULL,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP
);

-- Insert initial record in User Table 
INSERT INTO User (id, name, country, subject, email, body, createdAt, updatedAt)
VALUES 
    (gen_random_uuid(), 'Santosh', 'India', 'User 1', 'sanshinde2012@gmail.com', 'Waiting for demo',  NOW(), NOW());