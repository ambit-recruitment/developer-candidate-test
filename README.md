# Description:

Query people with filtering conditions on age and gender.

# How to run

- Use docker-compose command. [How to install](https://docs.docker.com/compose/install/)

```
docker-compose build
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

# For future improvement

- CI/CD. Accordingly move things like ports to be configurable environment variables.
- Need better deployment choice beyond docker-compose for production.
- Token access to the api.
- Enhance the capability for 'real-word' usage.
  - Currently the user can only query against fixed people data. Future work could be done to further support dynamic list.
  - The work could involve user stories like enabling users to add or delete people from the list or perhaps even enabling users to define or editing filter conditions etc.
- Further refactoring to support above. For example,
  - Choose decent database and improve data access layer.
  - Define customerised errors and handle accordingly so that easy trouble-shooting as well as provide meaningful feedback message to users.
- More tests. For example,
  - unit test cases to verify the reducer.
  - unit test cases for error handling between layers etc.
- Paging people data when load from backend.
- Improve logging with lib like winston etc.
- UI improvement on layout and themes.

# Considerations and approaches taken

- Refactoring v.s. rewriting?
  - Existing duplication in codes mainly concern backend rendering. So started with some clean up and moved the focus to some equivalent implementation on client side rendering solution later.
- Same application v.s. two applications.
  - Picked up later so that able to leverage create-react-app. Had some idea about the former that involves using proxy and send html etc.
- Webpack react v.s. create-react-app?
  - Used create-react-app to save time. Also react scripts provide sophisticated framework for future improvement.
- Didn't touch database since current way is sufficient for usage.
