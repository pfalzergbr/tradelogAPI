// Require DB
const strategyService = require('../services/strategy-service');

// ------------------ STRATEGIES ----------------------

// Create new Strategy
// @POST /api/strategy/
exports.createStrategy = async (req, res, next) => {
    const { user_id } = req.user;
    const {
        strategyName: strategy_name,
        description,
        accountId: account_id,
    } = req.body;

    try {
        const strategy = await strategyService.newStrategy(user_id, {
            strategy_name,
            description,
            account_id,
        });

        res.status(200).send({ message: 'New strategy created', strategy });
    } catch (error) {
        return next(error);
    }
};
// Get one strategy
// @GET /api/strategy/:strategyId
exports.getStrategy = async (req, res, next) => {
    try {
    } catch (error) {
        return next(error);
    }
};

// Update a strategy
// @PATCH /api/strategy/:strategyId
exports.updateStrategy = async (req, res, next) => {
    try {
    } catch (error) {
        return next(error);
    }
};
// Delete a strategy
// @DELETE /api/strategy/:strategyId
exports.deleteStrategy = async (req, res, next) => {
    try {
    } catch (error) {
        return next(error);
    }
};
// Get all strategies by user ID
// @GET /api/strategy/list
exports.getUserStrategies = async (req, res, next) => {
    try {
    } catch (error) {
        return next(error);
    }
};
// Get all strategies by account ID
// @GET /api/strategy/list/:accountId
exports.getAccountStrategies = async (req, res, next) => {
    try {
    } catch (error) {
        return next(error);
    }
};