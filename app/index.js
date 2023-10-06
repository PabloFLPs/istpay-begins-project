import express from "express"

const PORT = process.env.PORT || 3000

// Importing routes:
import { usersRouter } from "./routes/users.js"
import { productsRouter } from "./routes/products.js"
import { purchaseOrdersRouter } from "./routes/purchaseOrders.js"
import { purchaseOrderItemsRouter } from "./routes/purchaseOrderItems.js"

const app = express()

// Initializing our server on PORT:
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}...`)
})

app.use(express.json())

// Index Page:
app.get("/", (req, res) => {
    res.send("Index Page")
})

// Adding routes to our app:
app.use("/users", usersRouter)
app.use("/products", productsRouter)
app.use("/purchaseOrders", purchaseOrdersRouter)
app.use("/purchaseOrderItems", purchaseOrderItemsRouter)
