const router = require("express").Router();
const { dht, tds, ph, turbidity } = require("../controllers");

/// DHT
// GET localhost:8080/dht => Get all data
router.get("/dht", dht.getDataDht);

// GET localhost:8080/dht/2 => Get data by id
router.get("/dht/:id", dht.getDataDhtByID);

// POST localhost:8080/dht/add => Add data
router.post("/dht/add", dht.addDataDht);

// POST localhost:8080/dht/delete => Delete data
router.post("/dht/delete", dht.deleteDataDht);

/// TDS
// GET localhost:8080/dht => Get all data
router.get("/tds", tds.getDataTds);

// GET localhost:8080/dht/2 => Get data by id
router.get("/tds/:id", tds.getDataTdsByID);

// POST localhost:8080/dht/add => Add data
router.post("/tds/add", tds.addDataTds);

// POST localhost:8080/dht/delete => Delete data
router.post("/tds/delete", tds.deleteDataTds);

/// PH
// GET localhost:8080/dht => Get all data
router.get("/ph", ph.getDataPh);

// GET localhost:8080/dht/2 => Get data by id
router.get("/ph/:id", ph.getDataPhByID);

// POST localhost:8080/dht/add => Add data
router.post("/ph/add", ph.addDataPh);

// POST localhost:8080/dht/delete => Delete data
router.post("/ph/delete/", ph.deleteDataPh);

/// Turbidity
// GET localhost:8080/dht => Get all data
router.get("/turbidity", turbidity.getDataTurbidity);

// GET localhost:8080/dht/2 => Get data by id
router.get("/turbidity/:id", turbidity.getDataTurbidityByID);

// POST localhost:8080/dht/add => Add data
router.post("/turbidity/add", turbidity.addDataTurbidity);

// POST localhost:8080/dht/delete => Delete data
router.post("/turbidity/delete/", turbidity.deleteDataTurbidity);

module.exports = router;
