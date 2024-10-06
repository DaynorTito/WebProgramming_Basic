
create database random_phrase;

USE random_phrase;

CREATE TABLE phrases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL
);

INSERT INTO phrases (text) VALUES 
('Life is what happens when you’re busy making other plans'), 
('In the end, we only regret the chances we didn’t take'), 
('Do what you can, with what you have, where you are'), 
('Believe you can and you’re halfway there'), 
('Happiness is not something ready made. It comes from your own actions'), 
('The only way to do great work is to love what you do');
