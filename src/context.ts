import { PrismaClient } from "@prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'
import { decodeAuthHeader, AuthTokenPayload } from "./utils/auth";   
import { Request } from "express";  

const prisma: PrismaClient = new PrismaClient();
// const prisma = new PrismaClient().$extends(withAccelerate())


export interface Context {
    prisma: PrismaClient;
    userId?: number;
}

export const context = ({ req }: { req: Request }): Context => {   // 2
    const token =
        req && req.headers.authorization
            ? decodeAuthHeader(req.headers.authorization)
            : null;

    return {  
        prisma,
        userId: token?.userId, 
    };
};