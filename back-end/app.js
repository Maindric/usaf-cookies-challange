const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.get('/login', (request, response) => {
    if(request.query.user) {
        response.cookie("username", request.query.user);
        response.end();
    } else {
        response.send("No user provided.");
    }
});

app.get('/hello', (request, response) => {
    const username = request.cookies.username;
    if(username){
        response.send(`Welcome ${username}!`);
    } else {
        response.send(`Not logged in!`);
    }
});

const port = 3001;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));