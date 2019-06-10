-- Warning: You can generate script only for two tables at a time in your Free plan 
-- 
-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;

CREATE DATABASE blod_db;
USE  blod_db;

-- ************************************** `messages`

CREATE TABLE `messages`
(
 `m_id`       int AUTO_INCREMENT,
 `m_group`    int NOT NULL ,
 `m_content`  text NOT NULL ,
 `m_datetime` datetime NOT NULL ,
 `m_from`     int NOT NULL ,
PRIMARY KEY (`m_id`, `m_group`)
);






-- ************************************** `group`

CREATE TABLE `group`
(
 `g_id`     int NOT NULL ,
 `g_member` int[] NOT NULL ,
 `g_name`   varchar(128) ,
PRIMARY KEY (`g_id`)
);

-- ************************************** `user`

CREATE TABLE `user`
(
 `u_id`     int NOT NULL ,
 `u_name`   varchar(128) ,
 `u_password` varchar(128) ,
 `u_birth` date ,
PRIMARY KEY (`u_id`)
);





