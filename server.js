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





app.listen(port, () => {
    console.log("Server listening on port " + port)
})
