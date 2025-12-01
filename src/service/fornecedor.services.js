import fornecedorRepository from '../repositories/fornecedor.repositories.js';

async function createFornecedorService(newFornecedor){
    const fornecedor = await fornecedorRepository.createFornecedorRepository(newFornecedor);
    return fornecedor;
}

export default {
    createFornecedorService
};