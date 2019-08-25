const express = require('express');
const fs = require('fs');

const app = express();

app.use((req, res, next) => {

    // Set up headers for html.
    res.setHeader('Content-Type', 'text/html');

    // Get hours and minutes from the date.
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    // Log the time and the url.
    log(`Time: ${hours}:${minutes}, URL: ${req.url} \n`);
    next();
});

// Add new info to the log file.
function log(message) {
    fs.appendFile('URL_logger.txt', message, function(err) {
        if (err) {
            throw err;
        }
    });
}

// Root 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/welcome.html')
});

// About-us
app.get('/about-us', (req, res) => {
    res.sendFile(__dirname + '/about.html')
});

// Everything else that is not root or about-us.
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/error.html')
});

app.listen(3000);