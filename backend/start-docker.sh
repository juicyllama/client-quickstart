docker kill $(docker ps -q) 2>/dev/null
docker compose --project-name jq-quickstart up --build --detach