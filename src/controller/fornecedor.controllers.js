import fornecedorService from '../service/fornecedor.services.js';

async function createFornecedorController(request, response) {
    const novoFornecedor = request.body;

    try {
        const fornecedor = await fornecedorService.createFornecedorService(novoFornecedor);
        response.status(201).send({fornecedor});
    } catch (error) {
        return response.status(400).send(error.message);
    }
}

async function findAllFornecedorController(request, response) {
     try {
        const fornecedor = await fornecedorService.findAllFornecedorService();
        response.status(200).send({fornecedor});
     } catch(error) {
        return response.status(404).send(error.message);
     }
}

async function findFornecedorByIdController(request, response) {
    const {id} = request.params;

    try {
        const fornecedor = await fornecedorService.findFornecedorByIdService(id);
        response.status(200).send({fornecedor});
    } catch (error) {
        return response.status(404).send(error.message);
    }
}

async function updateFornecedorController(request, response) {
    const {id}        = request.params;
    const novoFornecedor = request.body;

    try {
        const fornecedor = await fornecedorService.updateFornecedorService(novoFornecedor, id);
        response.status(200).send({fornecedor});
    } catch (error) {
        return response.status(400).send(error.message);
    }
}

async function deleteFornecedorController(request, response) {
    const {id} = request.params;

    try {
        const mensagemRetorno = await fornecedorService.deleteFornecedorService(id);
        response.status(200).send({mensagemRetorno});
    } catch (error) {
        return response.status(400).send(error.message);
    }
}

export default {
    createFornecedorController,
    findAllFornecedorController,
    findFornecedorByIdController,
    updateFornecedorController,
    deleteFornecedorController
}