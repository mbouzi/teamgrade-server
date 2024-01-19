import { extendType, objectType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Location = objectType({
    name: "Location",
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.string("city"); 
        t.nonNull.string("country");
        t.nonNull.list.nonNull.field("teams", {
            type: "Team",
            resolve(parent, args, context) {
                return context.prisma.team
                    .findMany({where: {locationId: parent.id}})
            }
        });
        t.nonNull.list.nonNull.field("users", {
            type: "User",
            resolve(parent, args, context) {
                return context.prisma.user
                    .findMany({where: {locationId: parent.id}})
            }
        });
        t.nonNull.list.nonNull.field("players", {
            type: "Player",
            resolve(parent, args, context) {
                return context.prisma.player
                    .findMany({where: {countryId: parent.id}})
            }
        });
        t.nonNull.list.nonNull.field("competitions", {
            type: "Competition",
            resolve(parent, args, context) {
                return context.prisma.competition
                    .findMany({where: {locationId: parent.id}})
            }
        });
    },
});
