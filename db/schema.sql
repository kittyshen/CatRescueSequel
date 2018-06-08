-- Create the database cats_db and specified it for use.
DROP DATABASE IF EXISTS cat_sequel;
create database cat_sequel;
use cat_sequel;
select * from CatSequels;

-- Insert a set of records.

INSERT INTO CatSequels (cat_name,createdAt,updatedAt) VALUES ('grey tabby cat',current_timestamp(),current_timestamp()),('ginger cat',current_timestamp(),current_timestamp()),('black cat',current_timestamp(),current_timestamp());

select * from CatSequels;