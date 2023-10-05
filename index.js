import express from "express"

const PORT = process.env.PORT || 3000

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
