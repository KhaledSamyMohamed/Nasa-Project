const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.once('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL, {
        //useNewUrlParser: true,        // This might cause the warning
        //useFindAndModify: false,      // This might cause the error
        //useCreateIndex: true,         // This might cause the error
        //useUnifiedTopology: true,     // This might cause the warning
    });
}

async function mongoDisconnect() {
    await mongoose.disconnect()
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
};