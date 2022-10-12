const redis = require("redis");
const redisClient = redis.createClient();
redisClient.connect();

// const { promisify } = require("util");
// promisify(redisClient.get).bind(redisClient);
// promisify(redisClient.set).bind(redisClient);

module.exports = redisClient;