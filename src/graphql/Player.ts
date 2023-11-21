import { extendType, objectType, nonNull, stringArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";  

export const Player = objectType({
    name: "Player",
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.string("name");
    },
});

export const PlayerQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("players", {
            type: "Player",
            resolve(parent, args, context, info) {
                return context.prisma.player.findMany();
            },
        });
    },
});

export const PlayerMutation = extendType({
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("createPlayer", {
            type: "Player",  
            args: {
                name: nonNull(stringArg()),
            },
            
            resolve(parent, args, context) {    

                // const { userId } = context;

                // if (!userId) {  // 1
                //     throw new Error("Cannot post without logging in.");
                // }

                const newPlayer = context.prisma.player.create({
                    data: {
                        name: args.name,
                    },
                });
                return newPlayer;
            },
        });
    },
});