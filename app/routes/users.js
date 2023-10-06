import express from "express"

// Controllers:
import { createUser, findUser, updateUser, deleteUser, getUsers } from "../controllers/users.js"

// Services:
import { userLogin } from "../auth/userService.js"

const usersRouter = express.Router()

// Routes:
usersRouter.post("/", createUser)
usersRouter.post("/login", userLogin)
usersRouter.get("/:id", findUser)
usersRouter.put("/:id", updateUser)
usersRouter.delete("/:id", deleteUser)
usersRouter.get("/", getUsers)

export { usersRouter }
