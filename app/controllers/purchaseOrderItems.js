import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const createPurchaseOrderItem = async (req, res) => {
    try {
        const { purchase_order_id, product_id, quantity, unit_price } = req.body
        const newPurchaseOrderItem = await prisma.purchaseOrderItems.create({
            data: {
                purchase_order: {
                    connect: {
                        id: purchase_order_id
                    }
                },
                product: {
                    connect: {
                        id: product_id
                    }
                },
                quantity,
                unit_price
            }
        })
        return res.json({
            success: true,
            data: newPurchaseOrderItem
        })
    } catch (error) {
        return res.json({
            success: false,
            message: `${error}`
        })
    }
}

const findPurchaseOrderItem = async (req, res) => {
    const purchaseOrderItemId = req.params.id
    try {
        const purchaseOrderItem = await prisma.purchaseOrderItems.findUnique({
            where: {
                id: purchaseOrderItemId
            }
        })
        res.json({
            success: true,
            data: purchaseOrderItem
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}

const updatePurchaseOrderItem = async (req, res) => {
    const purchaseOrderItemId = req.params.id
    try {
        const purchaseOrderItem = await prisma.purchaseOrderItems.update({
            where: {
                id: purchaseOrderItemId
            },
            data: req.body
        })
        res.json({
            success: true,
            data: purchaseOrderItem
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}

const deletePurchaseOrderItem = async (req, res) => {
    const purchaseOrderItemId = req.params.id
    try {
        const purchaseOrderItem = await prisma.purchaseOrderItems.delete({
            where: {
                id: purchaseOrderItemId
            }
        })
        res.json({
            success: true,
            data: purchaseOrderItem
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}

const getPurchaseOrderItems = async (req, res) => {
    try {
        const allPurchaseOrderItems = await prisma.purchaseOrderItems.findMany()
        return res.json({
            success: true,
            data: allPurchaseOrderItems
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error
        })
    }
}

export {
    createPurchaseOrderItem,
    findPurchaseOrderItem,
    updatePurchaseOrderItem,
    deletePurchaseOrderItem,
    getPurchaseOrderItems
}
