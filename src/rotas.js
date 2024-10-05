import canalController from "./controller/canalController.js";
import programaController from "./controller/programaController.js";
import programaFvController from "./controller/programaFvController.js";
import usuarioController from "./controller/usuarioControler.js";

export default function adicionarRotas(servidor) {
    servidor.use(canalController);
    servidor.use(programaController);
    servidor.use(programaFvController);
    servidor.use(usuarioController);

}