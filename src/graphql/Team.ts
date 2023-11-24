import { extendType, objectType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Team = objectType({
    name: "Team",
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.string("name"); 
        t.nonNull.list.nonNull.field("players", {
            type: "Player",
            resolve(parent, args, context) {
                return context.prisma.team
                    .findUnique({where: {id: parent.id}})
                    .players();
            }
        });
        t.field("location", {
            type: "Location",
            resolve(parent, args, context) {
                return context.prisma.team
                    .findUnique({where: {id: parent.id}})
                    .location();
            }
        });
       
        t.nonNull.list.nonNull.field("homegames", {
            type: "Match",
            resolve(parent, args, context) {
                return context.prisma.team
                    .findUnique({where: {id: parent.id}})
                    .homegames();
            }
        });
        t.nonNull.list.nonNull.field("awaygames", {
            type: "Match",
            resolve(parent, args, context) {
                return context.prisma.team
                    .findUnique({where: {id: parent.id}})
                    .awaygames();
            }
        });
        t.nonNull.list.nonNull.field("communities", {
            type: "Community",
            resolve(parent, args, context) {
                return context.prisma.team
                    .findUnique({where: {id: parent.id}})
                    .communities();
            }
        });

        t.field("average", {
            type: "Int",
            resolve(parent, args, context) {
                return context.prisma.rating
                    .aggregate({where: {teamId: parent.id}, _avg: {score: true}});
            }
        });

        t.field("communityAverage", {
            type: "Int",
            args: {
                communityId: intArg()
            },
            resolve(parent, args, context) {
                return context.prisma.rating
                    .aggregate({where: {teamId: parent.id, communityId: args.communityId}, _avg: {score: true}});
            }
        });

        t.field("userAverage", {
            type: "Int",
            resolve(parent, args, context) {
                const { userId } = context;

                if (!userId) null;

                return context.prisma.rating
                    .aggregate({where: {teamId: parent.id, userId: userId}, _avg: {score: true}});
            }
        });
    },
});
