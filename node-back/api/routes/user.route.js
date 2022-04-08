const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

const express = require('express');
const router = express.Router();

  router.get("/all", controller.allAccess);
  router.get("/user", [authJwt.verifyToken], controller.userBoard);
  router.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
  router.get(
    "/deliverer",
    [authJwt.verifyToken, authJwt.isDeliverer],
    controller.delivererBoard
  );
//   router.get(
//     "/api/test/restaurant",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.restaurantBoard
//   );
module.exports = router;