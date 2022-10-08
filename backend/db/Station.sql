DROP TABLE IF EXISTS `Station`;

create table Station (
	station_id INT NOT NULL AUTO_INCREMENT,
	station_name VARCHAR(255),
    station_district VARCHAR(255),
    station_city VARCHAR(255),
    station_state VARCHAR(255),
    PRIMARY KEY (station_id)
);

INSERT INTO `Station` (station_name, station_district, station_city, station_state) VALUES ('Bopal police chowki', 'Bopal', 'Ahmedabad', 'Gujarat');
INSERT INTO `Station` (station_name, station_district, station_city, station_state) VALUES ('Vejalpur police chowki', 'Bopal', 'Ahmedabad', 'Gujarat');
INSERT INTO `Station` (station_name, station_district, station_city, station_state) VALUES ('Naroda police chowki', 'Naroda', 'Ahmedabad', 'Gujarat');
INSERT INTO `Station` (station_name, station_district, station_city, station_state) VALUES ('Vasna police chowki', 'Vasna', 'Ahmedabad', 'Gujarat');
INSERT INTO `Station` (station_name, station_district, station_city, station_state) VALUES ('Jamalpur police chowki', 'Jamalpur', 'Ahmedabad', 'Gujarat');
INSERT INTO `Station` (station_name, station_district, station_city, station_state) VALUES ('Chandkheda police chowki', 'Chandkheda', 'Ahmedabad', 'Gujarat');