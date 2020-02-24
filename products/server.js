const express = require("express");
    app = express();
    cors = require('cors');
    port = 8000;
    // path = require('path');
    server = app.listen(port, () => console.log(`Cha Cha Cha...Listening on port ${server.address().port}`));
    

app.use(express.json(), express.urlencoded({extended:true}),cors()); 

require('./server/config/database.config');
require('./server/routes/products.routes')(app);

