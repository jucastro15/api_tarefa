
import * as db from "../repository/programaFvRepository.js";
import { Router } from "express";
const endpoint = Router();

endpoint.post("/programaFavorito", async (req, resp) => {
    try {
        const favorito = req.body;
        const idProgramaFavorito = await db.programaFavoritoInsert(favorito);
        resp.json({ id: idProgramaFavorito});
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoint.get("/programaFavorito", async (req, resp) => {
    try {
        const favoritos = await db.programaFavoritoSelect();
        resp.json(
            { favoritos: favoritos }
        );
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

endpoint.put("/programaFavorito/:id", async (req, resp) => {
    try {
        const id = req.params;
        const favorito = req.body;
        await db.programaFavoritoUpdate(favorito, id);


        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoint.delete("/programaFavorito/:id", async (req, resp) => {
    try {
        const id = req.params;
        await db.programaFavoritoDelete(id);


        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

export default endpoint;
