/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Community: { // root type
    id: number; // Int!
    string: string; // String!
  }
  Competition: { // root type
    id: number; // Int!
    name: string; // String!
  }
  Location: { // root type
    city: number; // Int!
    country: string; // String!
    id: number; // Int!
  }
  Match: { // root type
    id: number; // Int!
  }
  Mutation: {};
  Performance: { // root type
    id: number; // Int!
  }
  Player: { // root type
    age?: number | null; // Int
    firstname: string; // String!
    id: number; // Int!
    lastname: string; // String!
  }
  Query: {};
  Rating: { // root type
    age?: number | null; // Int
    firstname: string; // String!
    id: number; // Int!
    lastname: string; // String!
    score: number; // Int!
  }
  Team: { // root type
    id: number; // Int!
    name: string; // String!
  }
  User: { // root type
    displayname?: string | null; // String
    email: string; // String!
    id: number; // Int!
    username: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Community: { // field return type
    id: number; // Int!
    members: NexusGenRootTypes['User'] | null; // User
    moderators: NexusGenRootTypes['User'] | null; // User
    string: string; // String!
    teams: NexusGenRootTypes['Team'] | null; // Team
  }
  Competition: { // field return type
    id: number; // Int!
    location: NexusGenRootTypes['Location'] | null; // Location
    matches: NexusGenRootTypes['Match'] | null; // Match
    name: string; // String!
  }
  Location: { // field return type
    city: number; // Int!
    competitions: NexusGenRootTypes['Competition'] | null; // Competition
    country: string; // String!
    id: number; // Int!
    players: NexusGenRootTypes['Player'] | null; // Player
    teams: NexusGenRootTypes['Team'] | null; // Team
    users: NexusGenRootTypes['User'] | null; // User
  }
  Match: { // field return type
    average: number | null; // Int
    awayteam: NexusGenRootTypes['Team'] | null; // Team
    communityAverage: number | null; // Int
    competitions: NexusGenRootTypes['Competition'] | null; // Competition
    hometeam: NexusGenRootTypes['Team'] | null; // Team
    id: number; // Int!
    performance: NexusGenRootTypes['Performance'] | null; // Performance
    ratedBy: NexusGenRootTypes['User'] | null; // User
    ratings: NexusGenRootTypes['Rating'] | null; // Rating
    userAverage: number | null; // Int
  }
  Mutation: { // field return type
    addNewMember: NexusGenRootTypes['Community']; // Community!
    createCommunity: NexusGenRootTypes['Community']; // Community!
    createMatch: NexusGenRootTypes['Match']; // Match!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    ratePlayer: NexusGenRootTypes['Rating']; // Rating!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
  }
  Performance: { // field return type
    id: number; // Int!
    match: NexusGenRootTypes['Match'] | null; // Match
    player: NexusGenRootTypes['Player'] | null; // Player
    ratings: NexusGenRootTypes['Rating'] | null; // Rating
    teams: NexusGenRootTypes['Team'] | null; // Team
  }
  Player: { // field return type
    age: number | null; // Int
    average: number | null; // Int
    communityAverage: number | null; // Int
    country: NexusGenRootTypes['Location'] | null; // Location
    firstname: string; // String!
    id: number; // Int!
    lastUserRating: number | null; // Int
    lastname: string; // String!
    matches: NexusGenRootTypes['Match'] | null; // Match
    performances: NexusGenRootTypes['Performance'] | null; // Performance
    ratings: NexusGenRootTypes['Rating'] | null; // Rating
    team: NexusGenRootTypes['Team'] | null; // Team
    userAverage: number | null; // Int
  }
  Query: { // field return type
    ok: boolean; // Boolean!
  }
  Rating: { // field return type
    age: number | null; // Int
    firstname: string; // String!
    id: number; // Int!
    lastname: string; // String!
    match: NexusGenRootTypes['Match'] | null; // Match
    performance: NexusGenRootTypes['Performance'] | null; // Performance
    player: NexusGenRootTypes['Player'] | null; // Player
    score: number; // Int!
    user: NexusGenRootTypes['User'] | null; // User
  }
  Team: { // field return type
    average: number | null; // Int
    awaygames: NexusGenRootTypes['Match'] | null; // Match
    communities: NexusGenRootTypes['Community'] | null; // Community
    communityAverage: number | null; // Int
    homegames: NexusGenRootTypes['Match'] | null; // Match
    id: number; // Int!
    location: NexusGenRootTypes['Location'] | null; // Location
    match: NexusGenRootTypes['Match'] | null; // Match
    name: string; // String!
    players: NexusGenRootTypes['Player'] | null; // Player
    userAverage: number | null; // Int
  }
  User: { // field return type
    communities: NexusGenRootTypes['Community'] | null; // Community
    createdCommunities: NexusGenRootTypes['Community'] | null; // Community
    displayname: string | null; // String
    email: string; // String!
    id: number; // Int!
    location: NexusGenRootTypes['Location'] | null; // Location
    matchesRated: NexusGenRootTypes['Match'] | null; // Match
    moderatedCommunities: NexusGenRootTypes['Community'] | null; // Community
    ratings: NexusGenRootTypes['Rating'] | null; // Rating
    username: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Community: { // field return type name
    id: 'Int'
    members: 'User'
    moderators: 'User'
    string: 'String'
    teams: 'Team'
  }
  Competition: { // field return type name
    id: 'Int'
    location: 'Location'
    matches: 'Match'
    name: 'String'
  }
  Location: { // field return type name
    city: 'Int'
    competitions: 'Competition'
    country: 'String'
    id: 'Int'
    players: 'Player'
    teams: 'Team'
    users: 'User'
  }
  Match: { // field return type name
    average: 'Int'
    awayteam: 'Team'
    communityAverage: 'Int'
    competitions: 'Competition'
    hometeam: 'Team'
    id: 'Int'
    performance: 'Performance'
    ratedBy: 'User'
    ratings: 'Rating'
    userAverage: 'Int'
  }
  Mutation: { // field return type name
    addNewMember: 'Community'
    createCommunity: 'Community'
    createMatch: 'Match'
    login: 'AuthPayload'
    ratePlayer: 'Rating'
    signup: 'AuthPayload'
  }
  Performance: { // field return type name
    id: 'Int'
    match: 'Match'
    player: 'Player'
    ratings: 'Rating'
    teams: 'Team'
  }
  Player: { // field return type name
    age: 'Int'
    average: 'Int'
    communityAverage: 'Int'
    country: 'Location'
    firstname: 'String'
    id: 'Int'
    lastUserRating: 'Int'
    lastname: 'String'
    matches: 'Match'
    performances: 'Performance'
    ratings: 'Rating'
    team: 'Team'
    userAverage: 'Int'
  }
  Query: { // field return type name
    ok: 'Boolean'
  }
  Rating: { // field return type name
    age: 'Int'
    firstname: 'String'
    id: 'Int'
    lastname: 'String'
    match: 'Match'
    performance: 'Performance'
    player: 'Player'
    score: 'Int'
    user: 'User'
  }
  Team: { // field return type name
    average: 'Int'
    awaygames: 'Match'
    communities: 'Community'
    communityAverage: 'Int'
    homegames: 'Match'
    id: 'Int'
    location: 'Location'
    match: 'Match'
    name: 'String'
    players: 'Player'
    userAverage: 'Int'
  }
  User: { // field return type name
    communities: 'Community'
    createdCommunities: 'Community'
    displayname: 'String'
    email: 'String'
    id: 'Int'
    location: 'Location'
    matchesRated: 'Match'
    moderatedCommunities: 'Community'
    ratings: 'Rating'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Match: {
    communityAverage: { // args
      communityId?: number | null; // Int
    }
  }
  Mutation: {
    addNewMember: { // args
      communityId: number; // Int!
      userId: number; // Int!
    }
    createCommunity: { // args
      name: string; // String!
      teamId: number; // Int!
    }
    createMatch: { // args
      awayteamId: number; // Int!
      competitionId: number; // Int!
      date: string; // String!
      hometeamId: number; // Int!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    ratePlayer: { // args
      communityId: number; // Int!
      matchId: number; // Int!
      performanceId: number; // Int!
      playerId: number; // Int!
      score: number; // Int!
      teamId: number; // Int!
    }
    signup: { // args
      email: string; // String!
      password: string; // String!
      username: string; // String!
    }
  }
  Player: {
    communityAverage: { // args
      communityId?: number | null; // Int
    }
  }
  Team: {
    communityAverage: { // args
      communityId?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}