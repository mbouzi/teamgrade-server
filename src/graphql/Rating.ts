import { extendType, objectType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Rating = objectType({
    name: "Rating",
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.string("firstname"); 
        t.nonNull.string("lastname");
        t.nonNull.int("score"); 
        t.int("age"); 
        t.field("user", {
            type: "User",
            resolve(parent, args, context) {
                return context.prisma.rating
                    .findUnique({where: {id: parent.id}})
                    .user();
            }
        });
        // t.field("player", {
        //     type: "Player",
        //     resolve(parent, args, context) {
        //         return context.prisma.rating
        //             .findUnique({where: {id: parent.id}})
        //             .player();
        //     }
        // });
        t.field("match", {
            type: "Match",
            resolve(parent, args, context) {
                return context.prisma.rating
                    .findUnique({where: {id: parent.id}})
                    .match();
            }
        });
        t.field("performance", {
            type: "Performance",
            resolve(parent, args, context) {
                return context.prisma.rating
                    .findUnique({where: {id: parent.id}})
                    .performance();
            }
        })
    },
});


export const RatingMutation = extendType({
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("ratePlayer", {
            type: "Rating",  
            args: {
                score: nonNull(intArg()),
                performanceId: nonNull(intArg()),
                playerId: nonNull(intArg()),
                matchId: nonNull(intArg()),
                teamId: nonNull(intArg()),
                communityId: nonNull(intArg()),
            },
            
            async resolve(parent, args, context) {    
                const { userId } = context;

                if (!userId) {
                    throw new Error("Cannot rate without logging in.");
                }

                const { score, performanceId, matchId, playerId, teamId, communityId } = args;

                const newRating = await context.prisma.rating.create({
                    data: {
                        score,
                        user: { connect: {id: userId }},
                        player: { connect: { id: playerId } },
                        performance: { connect: { id: performanceId }},
                        match: { connect: { id: matchId}},
                        team: { connect: { id: matchId}},
                        community: { connect: { id: matchId}},
                    },
                });
                return newRating;
            },
        });
    }
})
