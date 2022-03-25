const express = require("express");
const app = express();
const allController = require('./src/controller')
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({
  extended: true
}));


app.all("**", function (req, res, next) {
    console.log("got req",req.url)
    return next();
  });

allController.map(controller=>{

    app.use(controller.basePath,controller.router)
})

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`listening on port ${port}!`));
module.exports = app;