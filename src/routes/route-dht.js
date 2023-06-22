const router = require("express").Router();
const { dht } = require("../controllers");

// GET localhost:8080/iot => Get all data
router.get("/dht", dht.getDataIot);

// GET localhost:8080/iot/2 => Get data by id
router.get("/dht/:id", dht.getDataIotByID);

// POST localhost:8080/iot/add => Add data
router.post("/dht/add", dht.addDataIot);

// POST localhost:8080/iot/edit => Edit data
router.post("/dht/edit", dht.editDataIot);

// POST localhost:8080/iot/delete => Delete data
router.post("/dht/delete/", dht.deleteDataIot);

module.exports = router;
