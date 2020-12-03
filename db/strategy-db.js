const pool = require('./db');

exports.insertNewStrategy = async (user_id, strategyData) => {
    const { strategy_name, account_id, description } = strategyData;
    const query =
        'INSERT INTO strategies (strategy_name, description, account_id,  user_id) VALUES($1, $2, $3, $4) RETURNING *';
    try {
        const result = await pool.query(query, [
            strategy_name,
            description,
            account_id,
            user_id,
        ]);
        return result.rows[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.findStrategyById = async (userId, strategyId) => {
    const query =
        'SELECT * FROM strategies WHERE strategy_id = $1 AND user_id = $2';
    try {
        const result = await pool.query(query, [strategyId, userId]);
        return result.rows[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateStrategyById = async (userId, updatedData) => {
    const query =
        'UPDATE strategies SET strategy_name = $1, description = $2 WHERE strategy_id = $3 AND user_id = $4 RETURNING *';
    const { strategy_id, strategy_name, description } = updatedData;

    try {
        const result = await pool.query(query, [
            strategy_name,
            description,
            strategy_id,
            userId,
        ]);
        return result.rows[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.deleteStrategyById = async (strategy_id, user_id) => {
    const query =
        'DELETE FROM strategies WHERE strategy_id = $1 AND user_id = $2 RETURNING account_id';

    try {
        const result = await pool.query(query, [strategy_id, user_id]);
        return result.rows[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.findStrategyByUserId = async (userId) => {
    const query = 'SELECT * FROM strategies WHERE user_id = $1';

    try {
        const result = await pool.query(query, [userId]);
        return result.rows;
    } catch (error) {
        throw new Error(error.message);
    }
};