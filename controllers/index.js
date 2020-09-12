
const homeRoutes = require('./home-routes');
const router = require('express').Router();
const apiRoutes = require('./api');
const yourpageRoutes = require('./yourpage-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/yourpage', yourpageRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;