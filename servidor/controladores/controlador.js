var con = require("../lib/conexionbd");

module.exports = {
  todosLosPosts(req, res) {
    con.query("SELECT * FROM post", (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log("no funciona la base de datos");
      }
    });
  },

  postId(req, res) {
    con.query(
      "SELECT * FROM post where post.id = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) {
          res.json(rows[0]);
        } else {
          console.log("no funciona la base de datos");
        }
      }
    );
  },

  newPost(req, res) {
    const { title, text } = req.body;
    console.log(req.body);

    con.query(
      "INSERT INTO post (title, text) VALUES (?, ?)",
      [title, text],
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log("no funciona la base de datos");
        }
      }
    );
  },

  updatePost(req, res) {
    const { id, title, text } = req.body;
    con.query(
      'UPDATE post SET title = "' +
        title +
        '", text = "' +
        text +
        '" WHERE id = ' +
        id
    ),
      (err, rows, fields) => {
        if (!err) {
          res.json({ Status: "Guardado correctamente" });
        } else {
          console.log("no funciona la base de datos");
        }
      };
  },

  postDelete(req, res) {
    con.query(
      "DELETE FROM post WHERE id = " + req.params.id,
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log("no funciona la base de datos");
        }
      }
    );
  },

  allDelete(req, res) {
    con.query("DELETE FROM post", (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log("no funciona la base de datos");
      }
    });
  },
};
