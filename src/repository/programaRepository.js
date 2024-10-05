import con from './connection.js';
export async function canalProgramaInsert(programa) {
    const comando = `
        INSERT INTO tb_canal_programa (id_canal, nm_programa, ds_genero, hr_programa)
        VALUES (?, ?, ?, ?)
    `;
    const resultado = await con.query(comando, [programa.id_canal, programa.programa, programa.genero, programa.hora]);

    const dados = resultado[0]; 
    return dados.insertId;
 
}


export async function canalProgramaSelect() {
    const comando = `
        SELECT * FROM tb_canal_programa
    `;
    const resultado = await con.query(comando);

    const dados = resultado[0];
    return dados;
   
}


export async function canalProgramaUpdate(programa, id) {
    const comando = `
        UPDATE tb_canal_programa 
        SET id_canal = ?, nm_programa = ?, ds_genero = ?, hr_programa = ?
        WHERE id_canal_programa = ?
    `;
    const resultado = await con.query(comando, [programa.id_canal, programa.programa, programa.genero, programa.hora, id]);

    const dados = resultado[0];
    return dados.affectedRows;
}


export async function canalProgramaDelete(id) {
    const comando = `
        DELETE FROM tb_canal_programa WHERE id_canal_programa = ?
    `;
    const resultado = await con.query(comando, [id]);

    const dados = resultado[0];
    return dados.affectedRows;
}

