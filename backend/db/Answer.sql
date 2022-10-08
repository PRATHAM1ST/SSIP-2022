DROP TABLE IF EXISTS `Answer`;

create table Answer (
	ans_id INT NOT NULL AUTO_INCREMENT,
    submitted TIMESTAMP NOT NULL,
    station_id INT,
    ans_field VARCHAR(255),
    FOREIGN KEY (station_id) REFERENCES Station(station_id),
    PRIMARY KEY (ans_id)
);

INSERT INTO Answer (station_id, ans_field) VALUES (1, 'woo hoo cool dkjndf kjdfng wkdqwk');
INSERT INTO Answer (station_id, ans_field) VALUES (2, 'gro hoo cool djnf fng wkdqwk');
INSERT INTO Answer (station_id, ans_field) VALUES (4, 'woo erg  dkjndf kjdfng wkwk');
INSERT INTO Answer (station_id, ans_field) VALUES (1, 'o hoo cool dkjf kjdfng wkk');
INSERT INTO Answer (station_id, ans_field) VALUES (1, 'wo ho col dkndf kjdfng wkdqwk');