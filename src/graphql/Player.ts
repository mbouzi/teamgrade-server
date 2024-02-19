import { extendType, objectType, nonNull, stringArg, intArg, inputObjectType, arg, list } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

import { Sort } from './common'


export const Player = objectType({
    name: "Player",
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.string("firstname"); 
        t.nonNull.string("lastname"); 
        t.int("age"); 
        t.field("team", {
            type: "Team",
            resolve(parent, args, context) {
                return context.prisma.player
                    .findUnique({where: {id: parent.id}})
                    .team();
            }
        });
        t.field("country", {
            type: "Location",
            resolve(parent, args, context) {
                return context.prisma.player
                    .findUnique({where: {id: parent.id}})
                    .country();
            }
        });
        t.nonNull.list.nonNull.field("ratings", {
            type: "Rating",
            resolve(parent, args, context) {
                return context.prisma.rating
                    .findMany({where: {playerId: parent.id}})
            }
        });
        t.nonNull.list.nonNull.field("matches", {
            type: "Match",
            resolve(parent, args, context) {
                return context.prisma.match
                    .findMany({where: {players: {some: {id: parent.id}} }})
            }
        });

        t.nonNull.list.nonNull.field("performances", {
            type: "Performance",
            resolve(parent, args, context) {
                return context.prisma.performance
                    .findMany({where: {} })
            }
        })

        t.field("average", {
            type: "Int",
            async resolve(parent, args, context) {
                const aggregations =  await context.prisma.rating
                    .aggregate({where: {playerId: parent.id}, _avg: {score: true}})

                return aggregations._avg.score;

            }
        });

        t.field("userAverage", {
            type: "Int",
            async resolve(parent, args, context) {
                const { userId } = context;

                if (!userId) null;

                const aggregations = await context.prisma.rating
                    .aggregate({where: {playerId: parent.id, userId}, _avg: {score: true}});
                
                return aggregations._avg.score;
            }
        });
    },
});

export const PlayerOrderByInput = inputObjectType({
    name: "PlayerOrderByInput",
    definition(t) {
        t.field("lastname", { type: Sort });
        t.field("createdAt", { type: Sort });
    },
});

export const Players = objectType({
    name: "Players",
    definition(t) {
        t.nonNull.list.nonNull.field("players", { type: Player });
        t.nonNull.int("count");
        t.id("id");
    },
});

export const PlayerQuery = extendType({
    type: "Query",    
    definition(t) {
        t.nonNull.field("communityAverage", {
            type: "Int",  
            args: {
                communityId: nonNull(intArg()),
                playerId: nonNull(intArg())
            },
            
            async resolve(parent, args, context) {    
                const { userId } = context;

                if (!userId) {
                    throw new Error("Cannot rate without logging in.");
                }

                
                const { playerId, communityId } = args;

                const aggregations = await  context.prisma.rating
                .aggregate({where: {playerId: playerId, communityId: communityId}, _avg: {score: true}});

                return aggregations._avg.score || 0;
              
            },
        });

        t.nonNull.field("lastUserRating", {
            type: "Int",  
            args: {
                playerId: nonNull(intArg())
            },
            
            async resolve(parent, args, context) {    
                const { userId } = context;

                if (!userId) null;

                const { playerId } = args;


                const rating = await context.prisma.rating
                    .findFirst({where: {playerId: playerId, userId}, take: 1, orderBy: {createdAt: 'desc'}});
                
                return rating?.score || 0;
              
            },
        });

        t.nonNull.field("players", {
            type: "Players",
            args: {
                filter: stringArg() || null,
                skip: intArg(),
                take: intArg(),
                orderBy: arg({ type: list(nonNull(PlayerOrderByInput)) }),
            },
            async resolve(parent, args, context) {
                const where = args.filter
                    ? {
                          OR: [
                              { name: {
                                  contains: args.filter ? args.filter : "",
                                  mode: 'insensitive' } },
                              
                          ],
                      }
                    : {};
            
  
                const players = await context.prisma.player.findMany({
                      where:  { lastname: {
                          contains: args.filter ? args.filter : "",
                          mode: 'insensitive' } },
                      skip: args?.skip || undefined,
                      take: args?.take || undefined,
                    //   orderBy: args?.orderBy
                  });
  
                  const count = await context.prisma.player.count({ where:  { lastname: {
                      contains: args.filter ? args.filter : "",
                      mode: 'insensitive' } } });
                  const id = `player-search-results:${JSON.stringify(args)}`;
  
                  return {
                      players,
                      count,
                      id,
                  };
              },
          });
    }
})
