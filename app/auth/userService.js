import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

const userLogin = async (req, res) => {
    try {
        // Check if the email and password credentials was informed:
        const { email, password } = req.body
        if(!email || !password) return res.json({
            success: false,
            message: "Missing credentials."
        })

        // Check if the informed email does exists:
        const user = await prisma.users.findFirst({
            where: {
                email
            }
        })
        if(!user) return res.json({
            success: false,
            message: "Email not found."
        })

        // Finally check if the password is correct:
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect) return res.json({
            success: false,
            message: "Password incorrect."
        })

        // If everything goes well, then we have a succesful login:
        return res.json({
            success: true,
            data: user
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error
        })
    }
}

export {
    userLogin
}
