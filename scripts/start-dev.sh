#! /bin/bash

docker-compose -f docker-compose.dev.yml up -d --force-recreate
docker-compose -f docker-compose.dev.yml exec app php artisan key:generate
docker-compose -f docker-compose.dev.yml exec app php artisan optimize:clear
docker-compose -f docker-compose.dev.yml exec app php artisan migrate --seed

echo "Running at http://localhost:3000"

docker-compose -f docker-compose.dev.yml exec app npm run watch