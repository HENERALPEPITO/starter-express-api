const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Define a route for the homepage
app.get('/', (req, res) => {
    // HTML with styles
    const htmlResponse = `
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                    }
                    h1 {
                        color: #333;
                    }
                    p {
                        color: #666;
                    }
                </style>
            </head>
            <body>
                <h1>ISKLUTTER</h1>
                <p>MAMA mo</p>
            </body>
        </html>
    `;
    res.send(htmlResponse);
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

// Handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500 - Internal Server Error');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
