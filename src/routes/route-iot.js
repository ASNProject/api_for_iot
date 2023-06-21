const router = require("express").Router();
const { iot } = require("../controllers");

// GET localhost:8080/iot => Get all data
router.get("/iot", iot.getDataIot);

// GET localhost:8080/iot/2 => Get data by id
router.get("/iot/:id", iot.getDataIotByID);

// POST localhost:8080/iot/add => Add data
router.post("/iot/add", iot.addDataIot);

// POST localhost:8080/iot/edit => Edit data
router.post("/iot/edit", iot.editDataIot);

// POST localhost:8080/iot/delete => Delete data
router.post("/iot/delete/", iot.deleteDataIot);

module.exports = router;
