import { Router } from "express";
import fornecedorController from '../controller/fornecedor.controllers.js'



const router = Router();

router.post(
    '/fornecedor',
     fornecedorController.createFornecedorController
    );
    router.get("/fornecedor", fornecedorController.findAllFornecedorController);
    router.get("/fornecedor/:id", fornecedorController.findFornecedorbyIdController);

export default router