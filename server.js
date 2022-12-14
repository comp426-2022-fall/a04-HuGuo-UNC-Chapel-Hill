import { roll } from "./lib/roll.js"
import minimist from 'minimist'
import express, { application } from 'express'

const app = express()

// Use minimist to process one argument `--port=` on the command line after `node server.js`.
var args = minimist(process.argv.slice(2));

// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.
var port = 0
if (args.port) {
    port = args.port
} else {
    port = 5000
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res, next) => {
    res.status(200),
    res.send("200 OK")
})

app.get('/app/roll/', (req, res, next) => {
    res.status(200)
    res.send(roll(6, 2, 1))
})


app.post('/app/roll/', (req, res, next) => {
    const sides = parseInt(req.body.sides);
    const dice = parseInt(req.body.dice);
    const rolls = parseInt(req.body.rolls);
    res.status(200);
    res.send(roll(sides, dice, rolls));    
})

app.get('/app/roll/:sides', (req, res, next) => {
    const sides = parseInt(req.params.sides);
    res.status(200);
    res.send(roll(sides, 2, 1));
})

app.get('/app/roll/:sides/:dice', (req, res, next) => {
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    res.status(200);
    res.send(roll(sides, dice, 1));
})

app.get('/app/roll/:sides/:dice/:rolls', (req, res, next) => {
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    const rolls = parseInt(req.params.rolls);
    res.status(200);
    res.send(roll(sides, dice, rolls));
})

app.get('*', (req, res, next) => {
    res.status(404),
    res.send("404 NOT FOUND")
})



app.listen(port, () => {
    console.log("Server listening on port " + port)
})
