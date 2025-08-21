// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello, Jenkins!</title>
            <style>
                body, html {
                    height: 100%;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                }
                .center {
                    text-align: center;
                    font-size: 24px;
                    color: #333;
                }
            </style>
        </head>
        <body>
            <div class="center">
            <h1>Simple NodeJs Application---carrie</h1>
                Hello, Jenkins!
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
