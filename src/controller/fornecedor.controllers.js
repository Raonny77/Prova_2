import fornecedorService from '../service/fornecedor.services.js';

async function createFornecedorController(req, res) {
    const newFornecedor = req.body;

    try {
        const fornecedor = await fornecedorService.createFornecedorService(newFornecedor);
        res.status(201).send({fornecedor})
     }catch (err) {
        res.status(400).send({message: "Erro ao cadastrar fornecedor", error: err.message})
    }
}


async function findAllFornecedorController(req, res) {
    try {
        const fornecedor = await fornecedorService.findAllFornecedorService();
        res.send({fornecedor})
    }catch (e) {
        return res.status(404).send(e.message);
    }
}

    async function findFornecedorbyIdController(req, res) {}
       
export default {
    createFornecedorController,
    findAllFornecedorController,
    findFornecedorbyIdController
};
    
