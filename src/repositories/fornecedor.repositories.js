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
        return new Promise((resolve, reject) => {
            const {username, email, cnpj} = newFornecedor;
            db.run(`
                INSERT INTO fornecedores (cnpj, nome, email)
                VALUES (?, ?, ?)
            `, [cnpj,nome,email], 
            (err) =>{
                if (err) {
                    reject(err)
                } else {
                    resolve({message: "Fornecedor cadastrado com sucesso!"})
                }
            
                
            })
        })
    }

    export default {
        createFornecedorRepository
    };