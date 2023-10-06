import express from "express"

// Controllers:
import { createPurchaseOrderItem, findPurchaseOrderItem, updatePurchaseOrderItem, deletePurchaseOrderItem, getPurchaseOrderItems } from "../controllers/purchaseOrderItems.js"

const purchaseOrderItemsRouter = express.Router()

// Routes:
purchaseOrderItemsRouter.post("/", createPurchaseOrderItem)
purchaseOrderItemsRouter.get("/:id", findPurchaseOrderItem)
purchaseOrderItemsRouter.put("/:id", updatePurchaseOrderItem)
purchaseOrderItemsRouter.delete("/:id", deletePurchaseOrderItem)
purchaseOrderItemsRouter.get("/", getPurchaseOrderItems)

export { purchaseOrderItemsRouter }
