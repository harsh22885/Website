
const express = require('express')
const connectDB = require('./Backend/database/connection')
const app = express()

connectDB()

const publicPath = __dirname + '/Frontend'
app.use(express.static(publicPath))

app.set('view-engine', 'ejs')

const registerRouter = require('./registerd')
const signupRouter = require('./signupd')

// app.use(userRouter);
app.use(registerRouter);
app.use(signupRouter);

app.get('/', (req, res)=> {
    res.sendFile(`${publicPath}/Homepage.html`)
})


app.use(express.json({ extended: false }));


const port = process.env.PORT || 8080
app.listen(port , () => console.log(`Server ${port}`+` is runnning` ))
