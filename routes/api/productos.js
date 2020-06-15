const router = require('express').Router();

const { Producto, Nombre } = require('../../db');

//GET http://localhost:3000/api/productos

router.get('/', async(req, res) => {

    console.log(req.usuarioId);
    const productos = await Producto.findAll();
    res.json(productos);
});

//GET http://localhost:3000/api/productos/id no filtra por id 

router.get('/:productoId', async(req, res) => {

    await Producto.findOne(req.body, {
        where: { id: req.params.productoId }
    });
    res.json(productoId);

});


//GET http://localhost:3000/api/productos/nombre

router.get('/:nombre', async(req, res) => {
    let termino = req.params.termino;

    let regex = new RegExp(termino, 'i');
    await Producto.finAll(req.body, {
        where: { nombre: regex }
    });
    if (err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }

    res.json({
        ok: true,
        producto
    })

})






// POST  http://localhost:3000/api/productos

router.post('/', async(req, res) => {
    const producto = await Producto.create(req.body);
    res.json(producto);
});

//PUT http://localhost:3000/api/productos/id

router.put('/:productoId', async(req, res) => {
    await Producto.update(req.body, {
        where: { id: req.params.productoId }
    });
    res.json({
        success: 'Producto se ha modificado'
    })
});

//DELETE http://localhost:3000/api/productos/id

router.delete('/:productoId', async(req, res) => {
    await Producto.destroy({
        where: { id: req.params.productoId }
    });
    res.json({
        success: 'Producto se ha borrado correctamente'
    })
});

module.exports = router;