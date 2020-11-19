//Requires
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StrategySchema = new Schema({
    strategyName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    account: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Account',
    },
    trader: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    trades: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Trade',
        },
    ],
});

const Strategy = mongoose.model('Strategy', StrategySchema);
module.exports = Strategy