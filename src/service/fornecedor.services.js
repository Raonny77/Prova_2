import fornecedorRepository from '../repositories/fornecedor.repositories.js';

async function createFornecedorService(newFornecedor){
    const foundFornecedor = await fornecedorRepository.findByCnpjRepository(newFornecedor.cnpj);
    if (foundFornecedor) {
        throw new Error('CNPJ já cadastrado');
    }
    const fornecedor = await fornecedorRepository.createFornecedorRepository(newFornecedor);
    return fornecedor;
}

async function findAllFornecedorService() {
    const fornecedor = await fornecedorRepository.findAllFornecedorRepository();
    return fornecedor;
}

async function findByIdService(id) {
    const fornecedor = await fornecedorRepository.findByIdRepository(id);
    if (!fornecedor) throw new Error('Fornecedor não encontrado');
    return fornecedor;
}

export default {
    createFornecedorService,
    findAllFornecedorService,
    findByIdService,
};