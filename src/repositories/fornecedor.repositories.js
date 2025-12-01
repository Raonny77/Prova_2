import db from "../config/database.js";

db.run(`
        CREATE TABLE IF NOT EXISTS fornecedor (
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
            INSERT INTO fornecedor (cnpj, nome, email)
            VALUES (?, ?, ?)
            `, 
            [cnpj, nome, email], 
            function (err) {
                if (err) {
                    rej(err)
                } else {
                    res({id: this.lastID, ...newFornecedor})
                }
            }
        )
    })
}

function findByCnpjRepository(cnpj) {
    return new Promise((res, rej) => {
        db.get(
            `
            SELECT id, cnpj, nome, email
            FROM fornecedor
            WHERE cnpj = ?
            `, [cnpj], (err, row) => {
                if (err) {
                    rej(err);
                } else {
                    res(row);
                }
            }
        );
    });
}

function findByIdRepository(id) {
    return new Promise((res, rej) => {
        db.get(
            `
            SELECT id, cnpj, nome, email
            FROM fornecedor
            WHERE id = ?
            `, 
            [id], 
            (err, row) => {
                if (err) {
                    rej(err);
                } else {
                    res(row);
                }
            }
        );
    });
}

function findAllFornecedorRepository() {
    return new Promise((res, rej) => {
        db.all(`
            SELECT id, cnpj, nome, email
            FROM fornecedor
            `, 
            [], (err, rows) => {
                if (err) {
                    rej(err);
                } else {
                    res(rows);
                }
            }
        );
    });
}

export default {
    createFornecedorRepository,
    findByCnpjRepository,
    findByIdRepository,
    findAllFornecedorRepository
};
