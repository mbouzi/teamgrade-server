import { objectType, extendType, nonNull, stringArg } from "nexus";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { APP_SECRET } from "../utils/auth";

export const AuthPayload = objectType({
    name: "AuthPayload",
    definition(t) {
        t.nonNull.string("token");
        t.nonNull.field("user", {
            type: "User",
        });
    },
});

export const AuthMutation = extendType({
    type: "Mutation",
    definition(t) {

        t.nonNull.field("login", { 
            type: "AuthPayload",
            args: {
                email: nonNull(stringArg()),
                password: nonNull(stringArg()),
            },
            async resolve(parent, args, context) {

                const user = await context.prisma.user.findUnique({
                    where: { email: args.email },
                });

                console.log("USER:", user)

                
                if (!user) {
                    throw new Error("No such user found");
                }

                const valid = await bcrypt.compare(
                    args.password,
                    user.password,
                );

                console.log("VAL:", valid)
                if (!valid) {
                    throw new Error("Invalid password");
                }

                const token = jwt.sign({ userId: user.id }, APP_SECRET);
                console.log("TOKEN:", token)
                return {
                    token,
                    user,
                };
            },
        });

        t.nonNull.field("signup", {
            type: "AuthPayload",  
            args: {  
                email: nonNull(stringArg()), 
                password: nonNull(stringArg()),
                username: nonNull(stringArg()),
            },
            async resolve(parent, args, context) {
                const { email, username } = args,
                    password = await bcrypt.hash(args.password, 10);

                const user = await context.prisma.user.create({
                    data: { email, password, username  },
                });

                const token = jwt.sign({ userId: user.id }, APP_SECRET);

                return {
                    token,
                    user,
                };
            },
        });
    },
});