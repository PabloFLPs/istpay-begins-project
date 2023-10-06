import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const newUser = await prisma.users.create({
            data: {
                name,
                email,
                password: await bcrypt.hash(password, 10)
            }
        })
        return res.json({
            success: true,
            data: newUser
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error
        })
    }
}

const findUser = async (req, res) => {
    const userId = req.params.id
    try {
        const user = await prisma.users.findUnique({
            where: {
                id: userId
            }
        })
        res.json({
            success: true,
            data: user
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}

const updateUser = async (req, res) => {
    const userId = req.params.id
    try {
        const user = await prisma.users.update({
            where: {
                id: userId
            },
            data: req.body
        })
        res.json({
            success: true,
            data: user
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}

const deleteUser = async (req, res) => {
    const userId = req.params.id
    try {
        const user = await prisma.users.delete({
            where: {
                id: userId
            }
        })
        res.json({
            success: true,
            data: user
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}

const getUsers = async (req, res) => {
    try {
        const allUsers = await prisma.users.findMany()
        return res.json({
            success: true,
            data: allUsers
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error
        })
    }
}

export {
    createUser,
    findUser,
    updateUser,
    deleteUser,
    getUsers
}
