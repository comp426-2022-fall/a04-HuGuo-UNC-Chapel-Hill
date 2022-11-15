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

app.post("/app/roll/", (req, res, next) => {
    const side_in = parseInt(req.body.sides);
    const dice_in = parseInt(req.body.dice);
    const roll_in = parseInt(req.body.rolls);
    res.send(roll(side_in, dice_in, roll_in));
})


app.get("/app/roll/:sides", (req, res, next) => {
    const side_in = parseInt(req.params.sides);
	res.send(roll(side_in, 2, 1));
})

app.get('*', (req, res, next) => {
    res.status(404),
    res.send("404 NOT FOUND")
})



app.listen(port, () => {
    console.log("Server listening on port " + port)
})
