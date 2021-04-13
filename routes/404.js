module.exports = function (req, res, next) {
     // respond with html page
     if (req.accepts('html')) {
          res.status(404).render('404', { url: req.url });
          return;
     }

     // respond with json
     if (req.accepts('json')) {
          res.status(404).json({
               error: "404",
               message: "Page Not Found | AnimalsAPI"
          })
          return;
     }
}