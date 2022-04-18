import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { BlogsResolver } from './ingredients/resolvers/blogs';
import { AppDataSource } from './parkour';

const main = async () => {
  AppDataSource.initialize()
    .then(() => {
      console.log('ho gya connect? pausechamp');
    })
    .catch((error) => console.log(error));
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [BlogsResolver],
      validate: false,
    }),
    debug: true,
    introspection: true,
  });
  server
    .listen({ port: process.env.PORT })
    .then((serverInfo) => console.log(`server nhp ${serverInfo.url}`));
};
main();
