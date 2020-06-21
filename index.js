const server = require('./server.js');

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
    console.log(`\n *** Watch the magic happen on port ${PORT}! *** \n`);
});