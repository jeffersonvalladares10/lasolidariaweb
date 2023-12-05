const express = require('express');
const router = express.Router();

const userRouter = require('./User.router');
router.use('/user', userRouter);

const campRouter = require('./Camp.router');
router.use('/camp', campRouter);

const donationRouter = require('./Donation.router');
router.use('/donation', donationRouter);

const orgRouter = require('./Org.router');
router.use('/org', orgRouter);

module.exports = router;