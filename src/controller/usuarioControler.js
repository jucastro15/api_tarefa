import * as db from "../repository/usuarioRepository.js";
import { Router } from "express";
const endpoint = Router();

endpoint.post("/usuario", async (req, resp) => {
    try {
        const usuario = req.body.usuario;
        const idUsuario = await db.usuarioInsert({ usuario: usuario });
        resp.json({ idUsuario });
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoint.get("/usuario", async (req, resp) => {
    try {
        const usuarios = await db.usuarioSelect();
        resp.json({ usuarios: usuarios });
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoint.put("/usuario/:id", async (req, resp) => {
    try {
        const id = req.params;
        const usuario = req.body;
        await db.usuarioUpdate(usuario, id);


        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoint.delete("/usuario/:id", async (req, resp) => {
    try {
        const id = req.params;
        await db.usuarioDelete(id);

        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

export default endpoint;