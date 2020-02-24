const Product = require('../models/product.model');

module.exports = {
    index: (request, response) => {
        Product.find()
            .then(results => response.json(results))
            .catch(err => response.status(400).json(err.errors));
    },
    show: (request, response) => {
        Product.findById(request.params.id)
            .then(result => response.json(result))
            .catch(err => response.status(400).json(err.errors));
    },
    create: (request, response) => {
        console.log('created something');
        Product.create(request.body)
            .then(result => response.json(result))
            .catch(err => response.status(400).json(err.errors));
    },
    update: (request, response) => {
        Product.findOneAndUpdate({_id: request.params.id},request.body,{runValidators: true, useFindAndModify: true, context: 'query'})
            .then(result => response.json(result))
            .catch(err => response.status(400).json(err.errors));
    },
    destroy: (request, response) => {
        Product.deleteOne({_id: request.params.id})
            .then(result => response.json(result))
            .catch(err => response.status(400).json(err.errors));   
    }
}