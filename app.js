const express = require("express")
const chalk = require("chalk")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 3000

//app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./src/views")
app.set("view engine", "ejs")

//app.get('/', (request, response) => {
 //   response.send('index')
//})

app.use("/", (request, response) => {
   response.render("index",  {title: "Welcome"})
})

app.listen(PORT, () => {
    console.log(`Welcome to this order summary page, listening on port ${chalk.green(PORT)}`)
})