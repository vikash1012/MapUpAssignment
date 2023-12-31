const express=require("express");
const router=express.Router();
// imported callback function for post method handler
const calculateIntersectionPoint=require("../controllers/calculateIntersectionPointHandler");

router.route("/line").post(calculateIntersectionPoint);

module.exports=router;