import con from './connection.js';


export async function canalInsert(canal) {
    const comando = `
        INSERT INTO tb_canal (nm_canal, nr_canal, bt_aberto)
        VALUES (?, ?, ?)
    `;
    const resultado = await con.query(comando, [canal.canal, canal.numero, canal.aberto]);
    
    const dados = resultado[1];
    return dados.insertId;
}


export async function canalG() {
    const comando = `
        SELECT * FROM tb_canal
    `;
    const resultado = await con.query(comando);
    const dados = resultado[0];
    return dados;
}
 

export async function canalU(canal, id) {
    const comando = `
        UPDATE tb_canal 
        SET  nm_canal = ?, nr_canal = ?, bt_aberto = ?
        WHERE id_canal = ?
    `;
    const resultado = await con.query(comando, [canal.canal, canal.numero, canal.aberto, id]);
    const dados = resultado[0]
    return dados.affectedRows;
}


export async function canalDelete(id) {
    const comando = `
        DELETE FROM tb_canal WHERE id_canal = ?
    `;
    const resultado = await con.query(comando, [id]);
    const dados = resultado[0]
    return dados.affectedRows;
}
