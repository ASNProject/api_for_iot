const config = require("../configs/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error(err);
});

module.exports = {
  // Get all data
  getDataDht(req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
        SELECT * FROM dht_data;
        `,
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil ambil data!",
            data: results,
          });
        }
      );
      connection.release();
    });
  },
  // Get by id
  getDataDhtByID(req, res) {
    let id = req.params.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * FROM dht_data WHERE id = ?;
                `,
        [id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil ambil data",
            data: results,
          });
        }
      );
      connection.release();
    });
  },
  // POST data
  addDataDht(req, res) {
    let data = {
      suhu_udara: req.body.suhu,
    };
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                INSERT INTO dht_data SET ?;
                `,
        [data],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil tambah data",
          });
        }
      );
      connection.release();
    });
  },
  // Delete data
  deleteDataDht(req, res) {
    let id = req.body.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                DELETE FROM dht_data WHERE id = ?;
                `,
        [id],
        function (error, result) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Berhasil hapus data!",
          });
        }
      );
      connection.release();
    });
  },
};
