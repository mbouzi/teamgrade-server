import { extendType, objectType, nonNull, stringArg, intArg, idArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Community = objectType({
    name: "Community",
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.string("name");
        t.field("createdBy", {
            type: "User",
            resolve(parent, args, context) {
                return context.prisma.user
                    .findFirst({where: {createdCommunities: {some: {id: parent.id}}}});
            }
        });
        t.nonNull.list.nonNull.field("moderators", {
            type: "User",
            resolve(parent, args, context) {
                return context.prisma.user
                    .findMany({where: {moderatedCommunities: {every: {id: parent.id}}}});
            }
        });
        t.nonNull.list.nonNull.field("members", {
            type: "User",
            resolve(parent, args, context) {
                return context.prisma.user.findMany({where: {communities: {every: {id: parent.id}}}});
            }
        });

        t.nonNull.list.nonNull.field("teams", {
            type: "Team",
            resolve(parent, args, context) {
                return context.prisma.team.findMany({where: {communities:{every: {id: parent.id}}}});
            }
        });

    },
});

export const CommunityMutation = extendType({
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("createCommunity", {
            type: "Community",  
            args: {
                name: nonNull(stringArg()),
                teamId: nonNull(intArg()),
            },
            
            async resolve(parent, args, context) {    
                const { userId } = context;

                if (!userId) {  // 1
                    throw new Error("Cannot create without logging in.");
                }

                const { name, teamId} = args;

                const newCommunity = await context.prisma.community.create({
                    data: {
                        teams: { connect: { id: teamId }},
                        createdBy: { connect: { id: userId }},
                        name,
                    },
                });
                
                return newCommunity;
            },
        });


        t.nonNull.field("addNewMember", {
            type: "Community",  
            args: {
                userId: nonNull(intArg()),
                communityId: nonNull(intArg()),
            },
            
            async resolve(parent, args, context) {    

                const { userId, communityId} = args;

                const updatedCommunity = await context.prisma.community.update({
                    where: {
                        id: communityId
                    },
                    data: {
                        members: { connect: { id: userId}}
                    },
                });

                return updatedCommunity;
            },
        });
    },
});
