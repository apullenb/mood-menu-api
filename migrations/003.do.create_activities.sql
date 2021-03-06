


CREATE TABLE IF NOT EXISTS activities
(
 actTitle varchar(255) NOT NULL,
 moodID   int NOT NULL,
 stepsAmt int NULL,
 time     int NOT NULL,
 steps    text NULL,
 actID    int NOT NULL GENERATED BY DEFAULT AS IDENTITY (
 start 125
 ),
 CONSTRAINT PK_17 PRIMARY KEY ( actID ),
 CONSTRAINT FK_26 FOREIGN KEY ( moodID ) REFERENCES moods ( moodID )
);

CREATE INDEX fkIdx_28 ON activities
(
 moodID
);
