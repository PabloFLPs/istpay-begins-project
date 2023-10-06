import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock_quantity } = req.body
        const newProduct = await prisma.products.create({
            data: {
                name,
                description,
                price,
                stock_quantity
            }
        })
        return res.json({
            success: true,
            data: newProduct
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error
        })
    }
}

const findProduct = async (req, res) => {
    const productId = req.params.id
    try {
        const product = await prisma.products.findUnique({
            where: {
                id: productId
            }
        })
        res.json({
            success: true,
            data: product
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}

const updateProduct = async (req, res) => {
    const productId = req.params.id
    try {
        const product = await prisma.products.update({
            where: {
                id: productId
            },
            data: req.body
        })
        res.json({
            success: true,
            data: product
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}

const deleteProduct = async (req, res) => {
    const productId = req.params.id
    try {
        const product = await prisma.products.delete({
            where: {
                id: productId
            }
        })
        res.json({
            success: true,
            data: product
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}

const getProducts = async (req, res) => {
    try {
        const allProducts = await prisma.products.findMany()
        return res.json({
            success: true,
            data: allProducts
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error
        })
    }
}

export {
    createProduct,
    findProduct,
    updateProduct,
    deleteProduct,
    getProducts
}
