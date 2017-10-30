const controller = require('../controllers/animals.js');

module.exports= (app)=>{
    app.get('/',controller.index);
    app.get('/mongooses/new',controller.new);
    app.get('/mongooses/:id',controller.show);
    app.post('/mongooses',controller.create);
    app.get('/mongooses/edit/:id',controller.edit);
    app.put('/mongooses/:id',controller.update);
    app.get('/mongooses/destroy/:id',controller.destroy);
}