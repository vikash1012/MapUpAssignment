const express=require("express");
const router=express.Router();
const calculateIntersectionPoint=require("../controllers/calculateIntersectionPointHandler");

router.route("/line").post(calculateIntersectionPoint);

module.exports=router;