FROM mysql:latest

EXPOSE 3306

ADD /tables/ /docker-initdb.d/tables/
ADD deploy_schemas.sql /docker-initdb.d/