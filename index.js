require('dotenv').config();
const server = require('./src/server');

const port = process.env.PORT || 5001;

server.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});