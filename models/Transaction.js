const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    userId:{type:String, required:true},
    amount:{type:Number, required:true},
    type:{type:String, required:true},
    category:{type:String, required:true},
    reference:{type:String, required:true},
    description:{type:String, required:true ,unique: true},
    date:{type:Date, required:true,}
}) 

const TransactionModel = mongoose.model("Transactions",transactionSchema)

module.exports = TransactionModel;