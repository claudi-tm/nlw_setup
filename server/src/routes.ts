import { client } from "./lib/prisma";
import { FastifyInstance } from "fastify";
import { prisma } from "@prisma/client";

export async function appRoutes(app: FastifyInstance){
    app.get("/", async () => {
        const habits = await client.habit.findMany();
        return habits;
    });
}

