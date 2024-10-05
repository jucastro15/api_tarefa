import * as db from "../repository/canalRepositoy.js";

import { Router } from "express";
const endpoint = Router();


endpoint.post("/canal", async (req, resp) => {
    try {
        const canal = req.body;
        const idCanal = await db.canalInsert(canal);

        resp.json({ idCanal: idCanal });
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});


endpoint.get("/canal", async (req, resp) => {
    try {
        const canais = await db.canalSelect();

        resp.json(canais);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});


endpoint.put("/canal/:id", async (req, resp) => {
    try {
        const  id  = req.params;
        const canal = req.body;

         await db.canalUpdate(canal, id);

            resp.status(204).send();
       
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});


endpoint.delete("/canal/:id", async (req, resp) => {
    try {
        const  id  = req.params;

        await db.canalDelete(id);

       
            resp.status(204).send();
      
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

export default endpoint;
