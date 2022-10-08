DROP TABLE IF EXISTS `Question_Answer`;

CREATE TABLE Question_Answer (
    que_id INT,
    ans_id INT,
    FOREIGN KEY (que_id) REFERENCES Question(que_id),
    FOREIGN KEY (ans_id) REFERENCES Answer(ans_id)
);

INSERT INTO Question_Answer VALUES (1, 2);
INSERT INTO Question_Answer VALUES (3, 5);
INSERT INTO Question_Answer VALUES (4, 4);
INSERT INTO Question_Answer VALUES (1, 1);