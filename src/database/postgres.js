const { PrismaClient } = require('@prisma/client');

const postgres = new PrismaClient();

const postgresDBConnection = () => {
    postgres.$queryRaw`SELECT now()`
    .then(() => console.log('postgres up'))
    .catch(() => {
        console.error('postgres connection error');
        process.exit(1);
    })

    return postgres;
}

module.exports = {
    postgresDBConnection,
}