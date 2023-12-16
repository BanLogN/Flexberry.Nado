docker build --no-cache -f SQL\Dockerfile.PostgreSql -t nado/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t nado/app ../..
