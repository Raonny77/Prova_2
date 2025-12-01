import db from "../config/database.js";

db.run(`
        CREATE TABLE IF NOT EXISTS fornecedores (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cnpj VARCHAR NOT NULL UNIQUE,
        nome VARCHAR NOT NULL,
        email VARCHAR NOT NULL
        )
    `)

    function createFornecedorRepository(newFornecedor) {
        return new Promise((res, rej) => {
            const {nome, email, cnpj} = newFornecedor;
            db.run(
                `
                INSERT INTO fornecedores (cnpj, nome, email)
                VALUES (?, ?, ?)

            `, 
            [cnpj,nome,email], 
            (err) =>{
                if (err) {
                    rej(err)
                } else {
                    res({id: this.lastID, ...newFornecedor})
                }
            })
        })
    }

    export default {
        createFornecedorRepository
    };