import {Router} from "express";
import fornecedorController from "../controller/fornecedor.controllers.js"

const router = Router();

router.post("/fornecedor", fornecedorController.createFornecedorController);
router.get("/fornecedor", fornecedorController.findAllFornecedorController);
router.get("/fornecedor/:id", fornecedorController.findFornecedorByIdController);
router.put("/fornecedor/:id", fornecedorController.updateFornecedorController);
router.delete("/fornecedor/:id", fornecedorController.deleteFornecedorController);

export default router