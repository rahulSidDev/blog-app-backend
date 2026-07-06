const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log(`DB connected sucessfully`);
    }
    catch (e) {
        console.log(e.message)
    }
}

module.exports = dbConnect