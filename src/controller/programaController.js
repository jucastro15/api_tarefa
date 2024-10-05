import * as db from "../repository/programaRepository.js";
import { Router } from "express";
const endpoint = Router();

endpoint.post("/canalProg", async (req, resp) => {
    try {
        const programa = req.body;
        const idCanalProg = await db.canalProgramaInsert(programa);
        resp.status(200).send({ idCanalProg:idCanalProg});

    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoint.get("/canalProg", async (req, resp) => {
    try {
        const programas = await db.canalProgramaSelect();
        resp.status(200).send({ programas: programas });
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoint.put("/canalProg/:id", async (req, resp) => {
    try {
        const  id  = req.params;
        const programa = req.body;
      await db.canalProgramaUpdate(programa, id);

    
            resp.status(204).send();
     
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoint.delete("/canalProg/:id", async (req, resp) => {
    try {
        const  id  = req.params;
       await db.canalProgramaDelete(id);

            resp.status(204).send();
         
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

export default endpoint;
