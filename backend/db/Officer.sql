DROP TABLE IF EXISTS `Officer`;

create table Officer (
	officer_id INT NOT NULL AUTO_INCREMENT,
	ans_id  INT,
    FOREIGN KEY (ans_id) REFERENCES Answer(ans_id),
    PRIMARY KEY (officer_id)
);

INSERT INTO `Officer` (`ans_id`) VALUES (1);
INSERT INTO `Officer` (`ans_id`) VALUES (4);
INSERT INTO `Officer` (`ans_id`) VALUES (3);
INSERT INTO `Officer` (`ans_id`) VALUES (2);
INSERT INTO `Officer` (`ans_id`) VALUES (5);