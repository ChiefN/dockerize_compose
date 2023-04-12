CREATE TABLE test_table (
    id INT NOT NULL AUTO_INCREMENT,
    sampledata VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO test_table (sampledata) 
VALUES ('data1'),('data2'),('data3');