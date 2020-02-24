const mongoose = require('mongoose');
    database = 'MERN_product'

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser:true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('Established connection to the database'))
    .catch(err => console.log('Error connecting to the database', err))

