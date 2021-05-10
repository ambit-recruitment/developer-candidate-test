# Description:

Query people with filtering conditions on age and gender.

# How to run

- Use docker-compose command. [How to install](https://docs.docker.com/compose/install/)

```
docker-compose up
```

Browse to [http://localhost:8080](http://localhost:8080)

The service needs port 3300 and 8080 so could fail when the ports are in use already. In that case please try again after close other processes using the ports. e.g. on linux systems

```
lsof -i :3300  # to get the pids
kill -9 <pid>

```

- Use npm

```
cd server && npm run start&
cd ../client && npm run start&
```

Browse to [http://localhost:3000](http://localhost:3000)
