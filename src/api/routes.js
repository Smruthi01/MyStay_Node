const express = require("express");

const registerApi = require("./register");
const loginApi = require("./login");
const dashboardApi = require('./dashboard')
const adminApi = require('./admin')
const bookApi = require('./bookhotel')
const viewApi = require('./view')
const router = express.Router();


router.use(registerApi);
router.use(loginApi);
router.use(dashboardApi);
router.use(adminApi);
router.use(bookApi);
router.use(viewApi);
module.exports = router;