const { postgresDBConnection } = require('./postgres');
const { mongoDBConnection } = require('./mongodb');

const postgres = postgresDBConnection();
const mongodb = mongoDBConnection();

module.exports = {
    postgres,
    mongodb,
}