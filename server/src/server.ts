import Fastify from "fastify";
import cors from "@fastify/cors";
import { client } from "./lib/prisma";
import { appRoutes } from "./routes";


const app = Fastify();


app.register(cors);

app.register(appRoutes); // chama as rotas do arquivo externo



app.listen({
	port: 3333,
}).then(() => {
	console.log("Server HTTP Running");
});
