const mongodb = require('mongoose');

const urlMongo = process.env.MONGODB_URL;

const mongoDBConnection = () => {
    mongodb.connect(urlMongo, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("mongodb up"))
    .catch(()=> {
        console.error("mongodb connection error");
        process.exit(1);
    });

    return mongodb;
}

module.exports = {
    mongoDBConnection,
}