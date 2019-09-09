## unitiweb/golf-players-graphql-demo
Demo api showing the implementation of GraphQL and Node

### Install

**Clone Repo**

First you need to clone the repo. Open a terminal and `cd` to the location you want to store, then run the command below

```bash
git clone git@github.com:unitiweb/golf-players-graphql-demo.git
cd golf-players-graphql-demo
```

**Install Dependencies and Setup Demo**

```bash
npm run install
npm run migrate
npm run seed:run
docker-compose up -d
```

**Stop the Demo**

To shut down the services run this

```bash
docker-compose down
```
