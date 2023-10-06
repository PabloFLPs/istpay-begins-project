import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const createPurchaseOrder = async (req, res) => {
    try {
        const { user_id, total_amount, status, shipping_address } = req.body
        const newPurchaseOrder = await prisma.purchaseOrders.create({
            data: {
                user: {
                    connect: {
                        id: user_id
                    }
                },
                total_amount,
                status,
                shipping_address
            }
        })
        return res.json({
            success: true,
            data: newPurchaseOrder
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error
        })
    }
}

const findPurchaseOrder = async (req, res) => {
    const purchaseOrderId = req.params.id
    try {
        const purchaseOrder = await prisma.purchaseOrders.findUnique({
            where: {
                id: purchaseOrderId
            }
        })
        res.json({
            success: true,
            data: purchaseOrder
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}

const updatePurchaseOrder = async (req, res) => {
    const productId = req.params.id
    try {
        const purchaseOrder = await prisma.purchaseOrders.update({
            where: {
                id: productId
            },
            data: req.body
        })
        res.json({
            success: true,
            data: purchaseOrder
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}

const deletePurchaseOrder = async (req, res) => {
    const purchaseOrderId = req.params.id
    try {
        const purchaseOrder = await prisma.purchaseOrders.delete({
            where: {
                id: purchaseOrderId
            }
        })
        res.json({
            success: true,
            data: purchaseOrder
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}

const getPurchaseOrders = async (req, res) => {
    try {
        const allPurchaseOrders = await prisma.purchaseOrders.findMany()
        return res.json({
            success: true,
            data: allPurchaseOrders
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error
        })
    }
}

export {
    createPurchaseOrder,
    findPurchaseOrder,
    updatePurchaseOrder,
    deletePurchaseOrder,
    getPurchaseOrders
}
