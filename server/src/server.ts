import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const client = new PrismaClient();

app.register(cors, {
    
})

app.get("/", async () => {
	const habits = await client.habit.create({
		data: {
			id: "",
			created_at: "2023-02-01T00:00:00.000Z",
			title: "comer saudavel",
		},
	});
	return habits;
});

app.listen({
	port: 3333,
}).then(() => {
	console.log("Server HTTP Running");
});
