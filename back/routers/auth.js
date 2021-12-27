"use strict";

const express = require('express');
const router = express.Router();

// Controller
const controller = require("../controllers/authController");


// Router

router.get('/', controller.signupUser);


module.exports = router;