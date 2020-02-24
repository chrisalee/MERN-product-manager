const ProductController = require('../controllers/products.controller');

module.exports = (app) => {
    app.get('/api/product', ProductController.index)
    app.get('/api/product/:id', ProductController.show)
    app.post('/api/product/create', ProductController.create)
    app.put('/api/product/update/:id', ProductController.update)
    app.delete('/api/product/destroy/:id', ProductController.destroy)
}