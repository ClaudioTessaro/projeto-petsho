import { Router } from "express";
import ClienteController from "./app/Controller/ClienteController";
import ProdutoController from "./app/Controller/ProdutoController";
import ServicoController from "./app/Controller/ServicoController";

const routes = new Router();

routes.post("/cliente", ClienteController.salvar);
routes.get("/cliente/:id", ClienteController.findById);
routes.delete("/cliente/:id", ClienteController.delete);
routes.get("/cliente", ClienteController.findAll);

routes.post("/produto", ProdutoController.salvar);
routes.get("/produto/:id", ProdutoController.findById);
routes.delete("/produto/:id", ProdutoController.delete);
routes.get("/produto", ProdutoController.findAll);

routes.post("/servico", ServicoController.salvar);
routes.get("/servico/:id", ServicoController.findById);
routes.delete("/servico/:id", ServicoController.delete);
routes.get("/servico", ServicoController.findAll);

export default routes;
