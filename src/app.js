require('dotenv').config()
const connectDB = require('./config/db')

const app = require('./interface/server')

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`✅ servidor corriendo desde http://localhost:${process.env.PORT}`)
    })
})

