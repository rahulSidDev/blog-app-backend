const express = require('express')
const app = express()
const cors = require('cors');

require('dotenv').config()

app.use(express.json())

const dbConnect = require('./configs/dbConnect')
dbConnect()

app.use(cors({
  origin: 'https://blog-app-frontend-virid.vercel.app'
}));

const blogRoutes = require('./routes/blogRoutes')
app.use("/blog", blogRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})

app.get("/", (req, res) => {
    res.send(`<h1>Welcome to HOMEPAGE..</h1>`)
});