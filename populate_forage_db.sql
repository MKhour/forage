DROP SCHEMA IF EXISTS `foragedb`;
CREATE SCHEMA IF NOT EXISTS `foragedb`;
use `foragedb`;
CREATE TABLE users (
    username VARCHAR(50),
    passwd VARCHAR(100),
    points INT,
    PRIMARY KEY (username)
);

CREATE TABLE achievements (
    achievement_name VARCHAR(50),
    achievement_description VARCHAR(200),
    icon_link VARCHAR(100),
    PRIMARY KEY (achievement_name)
);

CREATE TABLE relations (
    username VARCHAR(50),
    achievement VARCHAR(100),
    CONSTRAINT usernane
    FOREIGN KEY (username)
    REFERENCES foragedb.users (username),
    CONSTRAINT achievement
    FOREIGN KEY (achievement)
    REFERENCES foragedb.achievements (achievement_name)
);

INSERT INTO achievements (achievement_name, achievement_description, icon_link)
VALUES
("Green Thumb", "Earn 25 points", ""),
("Natural Explorer", "Earn 50 points", ""),
("Eco-Friend", "Earn 100 points", ""); 

INSERT INTO users (username, passwd, points)
VALUES
("madelyn", "password", 25),
("jack", "password", 25),
("sara", "password", 50); 

INSERT INTO relations (username, achievement)
VALUES
("madelyn", "Green Thumb"),
("jack", "Green Thumb"),
("sara", "Green Thumb"),
("sara", "Natural Explorer"); 