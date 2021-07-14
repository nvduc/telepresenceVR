const https = require('https');
const fs = require('fs');
const app = require('express')();

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, app);

//routing file
app.get('/:namefile', function (req,res) {
    return res.status(200).sendFile(`${__dirname}/`+req.params.namefile);
});

app.use(require('express').json());
server.listen(5000, () => { console.log('listening on 5000') });