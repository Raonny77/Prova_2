import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS fornecedor (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cnpj VARCHAR UNIQUE NOT NULL,
        nome VARCHAR NOT NULL,
        email VARCHAR UNIQUE NOT NULL
    )
`);

function createFornecedorRepository(novoFornecedor) {
    return new Promise((resolve, reject) => {

        const {
            cnpj,
            nome,
            email
        } = novoFornecedor;

        db.run(
            `INSERT INTO fornecedor (cnpj, nome, email)
            VALUES(?,?,?)`,
            [cnpj, nome, email],
            function(error) {
                if (error) {
                    if (error.message && error.message.includes('UNIQUE constraint failed: fornecedor.email')) {
                        reject(new Error('Email já cadastrado'));
                    } else if (error.message && error.message.includes('UNIQUE constraint failed: fornecedor.cnpj')) {
                        reject(new Error('CNPJ já cadastrado'));
                    } else {
                        reject(error);
                    }
                } else {
                    resolve({
                        id: this.lastID,
                        ...novoFornecedor
                    });
                }
            }
        );
    });
}

function findFornecedorByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT 
                id, cnpj, nome, email
            FROM fornecedor
            WHERE id = ?`,
            [id],
            (error, row) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(row);
                }
            }
        )        
    });
}

function findAllFornecedorRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT 
                * 
            FROM fornecedor`,
            [],
            (error, rows) => {  
                if(error) {
                    reject(error);
                } else {
                    resolve(rows);  
                }
            }
        )
    });
}

function updateFornecedorRepository(id, fornecedor) {
    return new Promise((resolve, reject) => {

        const {
            cnpj, 
            nome, 
            email
        } = fornecedor;

        db.run(
            `UPDATE fornecedor SET 
                cnpj = ?, 
                nome = ?, 
                email = ? 
            WHERE id = ?`,
            [cnpj, nome, email, id],  
            (error) => {
                if(error) {
                    reject(error);
                } else {
                    resolve({
                        id,
                        ...fornecedor
                    });
                }
            }
        );
    });
}

function deleteFornecedorRepository(id) {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM fornecedor
            WHERE id = ?`,
            [id],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        message: "Fornecedor deletado com sucesso"
                    });
                }
            }
        );
    });
}

export default {
    createFornecedorRepository,
    findFornecedorByIdRepository,
    findAllFornecedorRepository,
    updateFornecedorRepository,
    deleteFornecedorRepository
}