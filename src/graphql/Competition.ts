import { extendType, objectType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Competition = objectType({
    name: "Competition",
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.string("name");
        t.field("location", {
            type: "Location",
            resolve(parent, args, context) {
                return context.prisma.competition
                    .findUnique({where: {id: parent.id}})
                    .location();
            }
        });
        t.field("matches", {
            type: "Match",
            resolve(parent, args, context) {
                return context.prisma.competition
                    .findUnique({where: {id: parent.id}})
                    .matches();
            }
        });
    },
});
