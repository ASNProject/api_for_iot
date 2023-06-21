const config = require("../configs/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.error(err);
});

module.exports = {
  // Get all data
  getDataIot(req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
        SELECT * FROM table_iot;
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
  getDataIotByID(req, res) {
    let id = req.params.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * FROM table_iot WHERE iot_id = ?;
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
  addDataIot(req, res) {
    let data = {
      iot_waktu: req.body.waktu,
      iot_ph: req.body.ph,
    };
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                INSERT INTO table_iot SET ?;
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
  // POST update data
  editDataIot(req, res) {
    let dataEdit = {
      iot_waktu: req.body.waktu,
      iot_ph: req.body.ph,
    };
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                UPDATE table_iot SET ? WHERE iot_id = ?;
                `,
        [dataEdit, id],
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
  deleteDataIot(req, res) {
    let id = req.body.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                DELETE FROM table_iot WHERE iot_id = ?;
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
