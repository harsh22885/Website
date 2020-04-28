
const express = require('express')
//const handlebars = require('express-handlebars')
const connectDB = require('./Backend/database/connection')

const app = express()

connectDB()
// router imports 
// const userRouter = require('./Backend/API/logind')
const registerRouter = require('./Backend/API/registerd')
const signupRouter = require('./signupd')

const publicPath = __dirname + '/Frontend'
app.use(express.static(publicPath))


app.set('view-engine', 'ejs')
// app.set('view engine', 'handlebars');
// app.set('views', __dirname + '/views')

// app.engine('handlebars', handlebars({
//     layoutsDir: __dirname + '/views',
// }));

app.get('/', (req, res)=> {
    res.sendFile(`${publicPath}/Homepage.html`)
})

// app.get('/test', (req, res) => {
//     const names = ['aff', 'bdd', 'cdd']
//     res.render('code', {names: names, layout: false})
// })


app.use(express.json({ extended: false }));
// app.use(userRouter);
app.use(registerRouter);
app.use(signupRouter);

const port = process.env.PORT || 8080
app.listen(port , () => console.log(`Server ${port}`+` is runnning` ))
