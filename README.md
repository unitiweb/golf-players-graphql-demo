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

**Postman Collection**

You will find a postman collection in the `postman` directory. Import this into postman to test the queries

**Playground**

You can use the `playground` to tryout the queries. Once the demo is up and running you can browse to the following 
url and your ready to go.

You'll see two tabs on the right side: `DOCS`, and `SCHEMA`. The `DOCS` tab shows the types and field names. The `SCHEMA` 
shows everything in the main schama file `src/schema.graphql`

```bash
http://127.0.0.1:4004/playground
```

**Schema**

To see what you can query, look at the `schema.graphql` file. If using the playground you can also use the `SCHEMA` 
tab on the right.
