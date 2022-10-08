DROP TABLE IF EXISTS `Question`;

create table Question (
	que_id INT NOT NULL AUTO_INCREMENT,
	que_val INT,
    que_field VARCHAR(255),
    PRIMARY KEY (que_id)
);

INSERT INTO `Question` (que_val, que_field) VALUES (4, "Good");
INSERT INTO `Question` (que_val, que_field) VALUES (5, "Excelent");
INSERT INTO `Question` (que_val, que_field) VALUES (3, "Average");
INSERT INTO `Question` (que_val, que_field) VALUES (1, "Bad");
INSERT INTO `Question` (que_val, que_field) VALUES (0, "Worst");