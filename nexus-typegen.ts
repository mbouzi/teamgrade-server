/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PlayerOrderByInput: { // input type
    createdAt?: NexusGenEnums['Sort'] | null; // Sort
    lastname?: NexusGenEnums['Sort'] | null; // Sort
  }
  TeamOrderByInput: { // input type
    createdAt?: NexusGenEnums['Sort'] | null; // Sort
    name?: NexusGenEnums['Sort'] | null; // Sort
  }
}

export interface NexusGenEnums {
  Sort: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Community: { // root type
    id: number; // Int!
    name: string; // String!
  }
  Competition: { // root type
    id: number; // Int!
    name: string; // String!
  }
  Location: { // root type
    city: string; // String!
    country: string; // String!
    id: number; // Int!
  }
  Match: { // root type
    date: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
  }
  Mutation: {};
  Performance: { // root type
    date: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
  }
  Player: { // root type
    age?: number | null; // Int
    firstname: string; // String!
    id: number; // Int!
    lastname: string; // String!
  }
  Players: { // root type
    count: number; // Int!
    id?: string | null; // ID
    players: NexusGenRootTypes['Player'][]; // [Player!]!
  }
  Query: {};
  Rating: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    score: number; // Int!
  }
  Season: { // root type
    endYear: string; // String!
    id: number; // Int!
    startYear: string; // String!
  }
  Team: { // root type
    id: number; // Int!
    name: string; // String!
  }
  Teams: { // root type
    count: number; // Int!
    id?: string | null; // ID
    teams: NexusGenRootTypes['Team'][]; // [Team!]!
  }
  User: { // root type
    displayname?: string | null; // String
    email: string; // String!
    id: number; // Int!
    profileImg?: string | null; // String
    username: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Community: { // field return type
    createdBy: NexusGenRootTypes['User'] | null; // User
    id: number; // Int!
    members: NexusGenRootTypes['User'][]; // [User!]!
    moderators: NexusGenRootTypes['User'][]; // [User!]!
    name: string; // String!
    teams: NexusGenRootTypes['Team'][]; // [Team!]!
  }
  Competition: { // field return type
    id: number; // Int!
    location: NexusGenRootTypes['Location'] | null; // Location
    matches: NexusGenRootTypes['Match'][]; // [Match!]!
    name: string; // String!
  }
  Location: { // field return type
    city: string; // String!
    competitions: NexusGenRootTypes['Competition'][]; // [Competition!]!
    country: string; // String!
    id: number; // Int!
    players: NexusGenRootTypes['Player'][]; // [Player!]!
    teams: NexusGenRootTypes['Team'][]; // [Team!]!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Match: { // field return type
    awayteam: NexusGenRootTypes['Team'] | null; // Team
    competition: NexusGenRootTypes['Competition'] | null; // Competition
    date: NexusGenScalars['DateTime']; // DateTime!
    hometeam: NexusGenRootTypes['Team'] | null; // Team
    id: number; // Int!
    location: NexusGenRootTypes['Location'] | null; // Location
    performances: NexusGenRootTypes['Performance'][]; // [Performance!]!
    players: NexusGenRootTypes['Player'][]; // [Player!]!
    ratedBy: NexusGenRootTypes['User'] | null; // User
    ratings: NexusGenRootTypes['Rating'][]; // [Rating!]!
  }
  Mutation: { // field return type
    addNewMember: NexusGenRootTypes['Community']; // Community!
    createCommunity: NexusGenRootTypes['Community']; // Community!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    ratePlayer: NexusGenRootTypes['Rating']; // Rating!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
  }
  Performance: { // field return type
    date: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    match: NexusGenRootTypes['Match'] | null; // Match
    player: NexusGenRootTypes['Player'] | null; // Player
    ratings: NexusGenRootTypes['Rating'][]; // [Rating!]!
  }
  Player: { // field return type
    age: number | null; // Int
    average: number | null; // Int
    country: NexusGenRootTypes['Location'] | null; // Location
    firstname: string; // String!
    id: number; // Int!
    lastname: string; // String!
    matches: NexusGenRootTypes['Match'][]; // [Match!]!
    performances: NexusGenRootTypes['Performance'][]; // [Performance!]!
    ratings: NexusGenRootTypes['Rating'][]; // [Rating!]!
    team: NexusGenRootTypes['Team'] | null; // Team
    userAverage: number | null; // Int
  }
  Players: { // field return type
    count: number; // Int!
    id: string | null; // ID
    players: NexusGenRootTypes['Player'][]; // [Player!]!
  }
  Query: { // field return type
    communityAverage: number; // Int!
    lastUserRating: number; // Int!
    players: NexusGenRootTypes['Players']; // Players!
    teams: NexusGenRootTypes['Teams']; // Teams!
  }
  Rating: { // field return type
    community: NexusGenRootTypes['Community'] | null; // Community
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    match: NexusGenRootTypes['Match'] | null; // Match
    performance: NexusGenRootTypes['Performance'] | null; // Performance
    player: NexusGenRootTypes['Player'] | null; // Player
    score: number; // Int!
    season: NexusGenRootTypes['Season'] | null; // Season
    team: NexusGenRootTypes['Team'] | null; // Team
    user: NexusGenRootTypes['User'] | null; // User
  }
  Season: { // field return type
    communities: NexusGenRootTypes['Community'][]; // [Community!]!
    competitions: NexusGenRootTypes['Competition'][]; // [Competition!]!
    endYear: string; // String!
    id: number; // Int!
    matches: NexusGenRootTypes['Match'][]; // [Match!]!
    performances: NexusGenRootTypes['Performance'][]; // [Performance!]!
    players: NexusGenRootTypes['Player'][]; // [Player!]!
    ratings: NexusGenRootTypes['Rating'][]; // [Rating!]!
    startYear: string; // String!
    teams: NexusGenRootTypes['Team'][]; // [Team!]!
  }
  Team: { // field return type
    awaygames: NexusGenRootTypes['Match'][]; // [Match!]!
    communities: NexusGenRootTypes['Community'][]; // [Community!]!
    competitions: NexusGenRootTypes['Competition'][]; // [Competition!]!
    homegames: NexusGenRootTypes['Match'][]; // [Match!]!
    id: number; // Int!
    location: NexusGenRootTypes['Location'] | null; // Location
    name: string; // String!
    players: NexusGenRootTypes['Player'][]; // [Player!]!
    ratings: NexusGenRootTypes['Rating'][]; // [Rating!]!
  }
  Teams: { // field return type
    count: number; // Int!
    id: string | null; // ID
    teams: NexusGenRootTypes['Team'][]; // [Team!]!
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
    profileImg: string | null; // String
    ratings: NexusGenRootTypes['Rating'][]; // [Rating!]!
    username: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Community: { // field return type name
    createdBy: 'User'
    id: 'Int'
    members: 'User'
    moderators: 'User'
    name: 'String'
    teams: 'Team'
  }
  Competition: { // field return type name
    id: 'Int'
    location: 'Location'
    matches: 'Match'
    name: 'String'
  }
  Location: { // field return type name
    city: 'String'
    competitions: 'Competition'
    country: 'String'
    id: 'Int'
    players: 'Player'
    teams: 'Team'
    users: 'User'
  }
  Match: { // field return type name
    awayteam: 'Team'
    competition: 'Competition'
    date: 'DateTime'
    hometeam: 'Team'
    id: 'Int'
    location: 'Location'
    performances: 'Performance'
    players: 'Player'
    ratedBy: 'User'
    ratings: 'Rating'
  }
  Mutation: { // field return type name
    addNewMember: 'Community'
    createCommunity: 'Community'
    login: 'AuthPayload'
    ratePlayer: 'Rating'
    signup: 'AuthPayload'
  }
  Performance: { // field return type name
    date: 'DateTime'
    id: 'Int'
    match: 'Match'
    player: 'Player'
    ratings: 'Rating'
  }
  Player: { // field return type name
    age: 'Int'
    average: 'Int'
    country: 'Location'
    firstname: 'String'
    id: 'Int'
    lastname: 'String'
    matches: 'Match'
    performances: 'Performance'
    ratings: 'Rating'
    team: 'Team'
    userAverage: 'Int'
  }
  Players: { // field return type name
    count: 'Int'
    id: 'ID'
    players: 'Player'
  }
  Query: { // field return type name
    communityAverage: 'Int'
    lastUserRating: 'Int'
    players: 'Players'
    teams: 'Teams'
  }
  Rating: { // field return type name
    community: 'Community'
    createdAt: 'DateTime'
    id: 'Int'
    match: 'Match'
    performance: 'Performance'
    player: 'Player'
    score: 'Int'
    season: 'Season'
    team: 'Team'
    user: 'User'
  }
  Season: { // field return type name
    communities: 'Community'
    competitions: 'Competition'
    endYear: 'String'
    id: 'Int'
    matches: 'Match'
    performances: 'Performance'
    players: 'Player'
    ratings: 'Rating'
    startYear: 'String'
    teams: 'Team'
  }
  Team: { // field return type name
    awaygames: 'Match'
    communities: 'Community'
    competitions: 'Competition'
    homegames: 'Match'
    id: 'Int'
    location: 'Location'
    name: 'String'
    players: 'Player'
    ratings: 'Rating'
  }
  Teams: { // field return type name
    count: 'Int'
    id: 'ID'
    teams: 'Team'
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
    profileImg: 'String'
    ratings: 'Rating'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addNewMember: { // args
      communityId: number; // Int!
      userId: number; // Int!
    }
    createCommunity: { // args
      name: string; // String!
      teamId: number; // Int!
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
      seasonId: number; // Int!
      teamId: number; // Int!
    }
    signup: { // args
      email: string; // String!
      password: string; // String!
      username: string; // String!
    }
  }
  Query: {
    communityAverage: { // args
      communityId: number; // Int!
      playerId: number; // Int!
    }
    lastUserRating: { // args
      playerId: number; // Int!
    }
    players: { // args
      filter?: string | null; // String
      orderBy?: NexusGenInputs['PlayerOrderByInput'][] | null; // [PlayerOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
    }
    teams: { // args
      filter?: string | null; // String
      orderBy?: NexusGenInputs['TeamOrderByInput'][] | null; // [TeamOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

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