DROP TABLE IF EXISTS `User`;

CREATE TABLE User (
	userid INT NOT NULL AUTO_INCREMENT,
	mobile_number VARCHAR(10),
	aadhaar_verified BOOLEAN NOT NULL,
    PRIMARY KEY (userid)
);

INSERT INTO `User` (`mobile_number`, `aadhaar_verified`) VALUES (8200357641, TRUE);
INSERT INTO `User` (`mobile_number`, `aadhaar_verified`) VALUES (8234035764, TRUE);
INSERT INTO `User` (`mobile_number`, `aadhaar_verified`) VALUES (8200397641, FALSE);
INSERT INTO `User` (`mobile_number`, `aadhaar_verified`) VALUES (9200397641, FALSE);
INSERT INTO `User` (`mobile_number`, `aadhaar_verified`) VALUES (9254039761, FALSE);