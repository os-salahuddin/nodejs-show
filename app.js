const express = require('express')
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
let router = require('./routes/user');
app.use('/users', router)
app.use(express.static('public'))
app.use(logger)
app.get('/', (req, res) => {
    //res.download('app.js');
    //res.status(200).json({message: 'hello'});
    res.render('index', {text: 'hello sire'})
})



function logger(req, res, next)
{
    console.log('heww');
    next();
}

app.listen(port, () => {
    console.log('running');
})