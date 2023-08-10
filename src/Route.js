const express = require("express");

const router = express.Router();

const { postUserDetail, getUser, checkUser } = require("./Controller");

router.post('/postUserDetail',postUserDetail)

router.post('/getUser',getUser)

router.post('/checkUser',checkUser);

module.exports = { router }
