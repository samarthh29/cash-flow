const express = require("express");
const userRouter = require("./user");
const accountRouter = require("./account");

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);

modeule.exports = router;
//api/v1/user
//api/v1/transaction
