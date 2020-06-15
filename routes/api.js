const router = require('express').Router();

const apiProductosRouter = require('./api/productos');

const apiUsersRouter = require('./api/users');
const middleware = require('./middleware')

router.use('/productos', middleware.checkToken, apiProductosRouter);
router.use('/users', apiUsersRouter);



module.exports = router;