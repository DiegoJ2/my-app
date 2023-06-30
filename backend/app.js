const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use('/home', (req,res) => {
fs.readFile('../frontend/challenge/home.html',(err,data)=>{
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write(data);
    return res.end();
})
});

app.use('/about', (req,res) => {
    fs.readFile('../frontend/challenge/about.html',(err,data)=>{
        res.writeHead(200,{'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    })
    });

    app.use('/contact', (req,res) => {
        fs.readFile('../frontend/challenge/contact.html',(err,data)=>{
            res.writeHead(200,{'Content-type': 'text/html'});
            res.write(data);
            return res.end();
        })
        });

        app.use('/error', (req,res) => {
            fs.readFile('../frontend/challenge/error.html',(err,data)=>{
                res.writeHead(401,{'Content-type': 'text/html'});
                res.write(data);
                return res.end();
            })
            });

            app.use('/', (req,res) => {
                fs.readFile('../frontend/index.html',(err,data)=>{
                    res.writeHead(200,{'Content-type': 'text/html'});
                    res.write(data);
                    return res.end();
                })
                });

app.listen (PORT, () => {
    console.log(`server listening on PORT: ${PORT}`);
});
