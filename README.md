# larning-sitespeed.io

## test
```
docker run --shm-size=1g --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io https://www.sitespeed.io/ --video --speedIndex
```


## Performance Dashboard
```
docker-compose up -d
docker-compose run sitespeed.io https://www.sitespeed.io/ --graphite.host=graphite
# Access the dashboard: http://127.0.0.1:3000
```



