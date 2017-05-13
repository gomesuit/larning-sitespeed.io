# larning-sitespeed.io

## test
```
docker run --shm-size=1g --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io https://www.sitespeed.io/ --video --speedIndex
docker run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io https://www.sitespeed.io/ --config config.json
```


## Performance Dashboard
```
docker-compose up -d
docker-compose run sitespeed.io https://www.sitespeed.io/ --graphite.host=graphite
# Access the dashboard: http://127.0.0.1:3000
```

## conf
```
#実行回数を指定
-n 1
#モバイル版
--mobile
#各jsonデータを保存
--plugins.load analysisstorer
#configファイルを使用
--config config.json
# カスタムpluginの使用
--plugins.load my-custom-plugin

#その他
https://www.sitespeed.io/documentation/sitespeed.io/configuration/
```
