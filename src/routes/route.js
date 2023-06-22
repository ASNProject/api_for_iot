const router = require("express").Router();
const { dht } = require("../controllers");

/// DHT
// GET localhost:8080/dht => Get all data
router.get("/dht", dht.getDataIot);

// GET localhost:8080/dht/2 => Get data by id
router.get("/dht/:id", dht.getDataIotByID);

// POST localhost:8080/dht/add => Add data
router.post("/dht/add", dht.addDataIot);

// POST localhost:8080/dht/delete => Delete data
router.post("/dht/delete/", dht.deleteDataIot);

/// TDS
// GET localhost:8080/dht => Get all data
router.get("/tds", dht.getDataIot);

// GET localhost:8080/dht/2 => Get data by id
router.get("/tds/:id", dht.getDataIotByID);

// POST localhost:8080/dht/add => Add data
router.post("/tds/add", dht.addDataIot);

// POST localhost:8080/dht/delete => Delete data
router.post("/tds/delete/", dht.deleteDataIot);

module.exports = router;
