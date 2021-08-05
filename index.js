

const app = require('express')();
const http = require('http').Server(app);

const port = process.env.PORT || 3000;


app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html');});

http.listen(port, () => { console.log('server run at http://localhost:${port}/');
});
