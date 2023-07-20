const express = require("express");
const Transaction = require("../models/Transaction");
const moment = require("moment/moment");
const router = express.Router();

router.post("/add-transaction", async function (req, res) {
    try {
        // const {money,type,category,reference,description,date} = req.body

        const newTransaction = await Transaction.create(req.body);
        res.status(201).json({
            data: "Transaction Added Successfully."
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post("/get-all-transaction", async (req, res) => {
    const { frequency, selectedRange,type } = req.body
    try {
       const transactions = await Transaction.find({...(frequency !== "custom" ? {date: {$gte : moment().subtract(Number(req.body.frequency),'d').toDate()}} : {date: {$gte : selectedRange[0] , $lte : selectedRange[1]}}),userId: req.body.userId , ...(type !=="all" && {type})})
        res.status(200).send(transactions)
    } catch (error) {     
    res.status(500).json(error)
}
})
router.post("/edit-transaction", async function (req, res) {
    try {
        // const {money,type,category,reference,description,date} = req.body

        await Transaction.findOneAndUpdate({_id: req.body.transactionId},req.body.payload);
        res.status(201).json({
            data: "Transaction Updated Successfully."
        })
    } catch (error) {
        res.status(500).json(error)
    }
})
router.post("/delete-transaction", async function (req, res) {
    try {
        // const {money,type,category,reference,description,date} = req.body

        await Transaction.findOneAndDelete({_id: req.body.transactionId});
        res.status(201).json({
            data: "Transaction Updated Successfully."
        })
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;