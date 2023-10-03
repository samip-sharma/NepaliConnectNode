import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, './**/*.schema.graphql'));
const resolversArray = loadFilesSync(
  path.join(__dirname, './**/*.resolver.ts'),
);

const typeDefs = mergeTypeDefs(typesArray);
const resolvers = mergeResolvers(resolversArray);

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
