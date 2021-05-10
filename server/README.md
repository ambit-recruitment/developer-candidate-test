# How to run

- Through npm

```
npm install
npm run start
```

Browse to [http://localhost:3300](http://localhost:3300)
Browse to [http://localhost:3300/api](http://localhost:3300/api) for the API

- Through docker

```
docker build . -t <image-name>
docker run -p <local-port-id>:3300 -d <image-name>
```

Browse to [http://localhost:<local-port-id>](http://localhost:<local-port-id>)
