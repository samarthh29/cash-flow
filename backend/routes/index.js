const express = require("express");
const userRouter = require("./user");

const router = express.Router();

router.use("/user", userRouter);

modeule.exports = router;
//api/v1/user
//api/v1/transaction
