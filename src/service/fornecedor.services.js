import fornecedorRepository from "../repositories/fornecedor.repositories.js";

async function createFornecedorService(novoFornecedor) {
    const fornecedor = await fornecedorRepository.createFornecedorRepository(novoFornecedor);
    
    if (!fornecedor) {
        throw new Error("Erro ao criar fornecedor");
    }

    return fornecedor;
}

async function findAllFornecedorService() {
    const fornecedor = await fornecedorRepository.findAllFornecedorRepository();
    return fornecedor;
}

async function findFornecedorByIdService(id) {
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id);
    
    if (!fornecedor) {
        throw new Error("fornecedor não encontrado");
    }
    
    return fornecedor;
}

async function updateFornecedorService(novoFornecedor, id) {
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id);
    
    if (!fornecedor) {
        throw new Error("fornecedor não encontrado");
    }
    
    const fornecedorAtualizado = await fornecedorRepository.updateFornecedorRepository(id, novoFornecedor);

    return fornecedorAtualizado;
}

async function deleteFornecedorService(id) {
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id);

    if (!fornecedor) {
        throw new Error("fornecedor não encontrado");
    }

    const mensagemRetorno = await fornecedorRepository.deleteFornecedorRepository(id);

    return mensagemRetorno;

}

export default {
    createFornecedorService,
    findAllFornecedorService,
    findFornecedorByIdService,
    updateFornecedorService,
    deleteFornecedorService
}