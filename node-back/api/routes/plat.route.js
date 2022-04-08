const express = require('express');
const router = express.Router();

const PlatController = require('../controllers/plat.controller');

router.get('/', PlatController.get_all_plat);

router.post('/', PlatController.create_plat);

router.get('/:idPlat', PlatController.get_plat_by_id);

router.patch('/:idPlat', PlatController.update_plat);

router.delete('/:idPlat', PlatController.update_plat);

module.exports = router;
