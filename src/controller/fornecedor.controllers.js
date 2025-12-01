import fornecedorService from '../service/fornecedor.services.js';

async function createFornecedorController(req, res) {
    const newFornecedor = req.body;

    try {
        const fornecedor = fornecedorService.createFornecedorService(newFornecedor);
        res.status(201).send({ fornecedor });
    } catch (err) {
        return res.status(400).send(err.message);
    }
}

export default {
    createFornecedorController
}
