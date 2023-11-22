import { extendType, objectType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Match = objectType({
    name: "Match",
    definition(t) {
        t.nonNull.int("id"); 
        t.field("hometeam", {
            type: "Team",
            resolve(parent, args, context) {
                return context.prisma.match
                    .findUnique({where: {id: parent.id}})
                    .hometeam();
            }
        });
        t.field("awayteam", {
            type: "Team",
            resolve(parent, args, context) {
                return context.prisma.match
                    .findUnique({where: {id: parent.id}})
                    .awayteam();
            }
        });
        t.field("performance", {
            type: "Performance",
            resolve(parent, args, context) {
                return context.prisma.match
                    .findUnique({where: {id: parent.id}})
                    .performance();
            }
        });
        t.field("ratings", {
            type: "Rating",
            resolve(parent, args, context) {
                return context.prisma.match
                    .findUnique({where: {id: parent.id}})
                    .players();
            }
        });
        t.field("competitions", {
            type: "Competition",
            resolve(parent, args, context) {
                return context.prisma.match
                    .findUnique({where: {id: parent.id}})
                    .competitions();
            }
        });
        t.field("ratedBy", {
            type: "User",
            resolve(parent, args, context) {
                return context.prisma.match
                    .findUnique({where: {id: parent.id}})
                    .ratedBy();
            }
        });
    },
});

export const MatchMutation = extendType({
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("createMatch", {
            type: "Match",  
            args: {
                hometeamId: nonNull(intArg()),
                awayteamId: nonNull(intArg()),
                date: nonNull(stringArg()),
                competitionId: nonNull(intArg()),
            },
            
            async resolve(parent, args, context) {    
                
                const { hometeamId, awayteamId, competitionId, date } = args,
                    players: any[] = []
                ;

                const homePlayers = await context.prisma.team.findUnique({where: {id: hometeamId}}).players();
                const awayPlayers = await context.prisma.team.findUnique({where: {id: awayteamId}}).players();

                players.push(homePlayers);
                players.push(awayPlayers);

                const newMatch = await context.prisma.match.create({
                    data: {
                        date,
                        hometeam: { connect: {id: hometeamId }},
                        awayteam: { connect: { id: awayteamId } },
                        competition: { connect: { id: competitionId }},
                        players: {
                            connect: players.map(player => {
                                return {id: player.id}
                            })
                        },
                    },
                });

                 // create new performance per player
                for(let i=0; i < players.length; i++) {
                   await context.prisma.performance.create({
                        data: {
                            date,
                            player: {
                                connect: { id: players[i].id }
                            },
                            match: { connect: { id: newMatch.id}}
                        }
                    })
                }
                

               
                return newMatch;
            },
        });
    }
})