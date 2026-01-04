import type { Request, Response } from "express";
import type { Users } from "../models/Users";
import prisma from "../config/database";


export class AuthService {
        login(req: Request, res: Response) {

        }

        async register(users : Users){
                const exist = prisma.Users.findUnique({
                        where : {
                                auht : {
                                        users.auht.email
                                }
                        }
                })
        }
}