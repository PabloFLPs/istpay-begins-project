import express from "express"

// Controllers:
import { createPurchaseOrder, findPurchaseOrder, updatePurchaseOrder, deletePurchaseOrder, getPurchaseOrders } from "../controllers/purchaseOrders.js"

const purchaseOrdersRouter = express.Router()

// Routes:
purchaseOrdersRouter.post("/", createPurchaseOrder)
purchaseOrdersRouter.get("/:id", findPurchaseOrder)
purchaseOrdersRouter.put("/:id", updatePurchaseOrder)
purchaseOrdersRouter.delete("/:id", deletePurchaseOrder)
purchaseOrdersRouter.get("/", getPurchaseOrders)

export { purchaseOrdersRouter }
