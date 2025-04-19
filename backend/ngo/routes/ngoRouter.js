const express = require("express");
const ngoController = require("../controller/ngoController");


const ngoRouter = express.Router();

ngoRouter.route("/requests").get(ngoController.getAllRequests);
ngoRouter.route("/request").patch(ngoController.changeStatus);


module.exports = ngoRouter;

// status - pending, otw, completed
// usertype - donor-client, ngo