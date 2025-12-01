import {Router} from "express";
import fornecedorController from '../controller/fornecedor.controllers.js'


const router = Router();

router.post('/fornecedores', fornecedorController.createFornecedorController);

export default router