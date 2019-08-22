const express = require("express"),
  app = express(),
  {join} = require('path'),
  next = require("next"),
  mongoose = require("mongoose"),
  PORT = process.env.PORT || 3000,
  dev = process.env.NODE_ENV !== "production",
  Next = next({ dev }),
  handle = Next.getRequestHandler(),
  root = process.cwd();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${
    process.env.DB_PASSWORD
  }@cluster0-qsi9n.gcp.mongodb.net/E-Teen?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useCreateIndex: true }
);

Next.prepare().then(() => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use("/", require("./routes/router"));
  app.get("*", (req, res) => {
<<<<<<< HEAD
      return handle(req, res);
=======
    if (req.url.startsWith("/sw")) {
      return Next.serveStatic(req, res, join(__dirname, `./static/workbox/${req.url}`));
    } else {
      return handle(req, res, req.url);
    }
>>>>>>> parent of d26da6b... Trial
  });

  app.listen(PORT, err => {
    if (err) throw err;
    console.log("Berhasil cuy! Koneksi ke PORT ", PORT);
  });
});
