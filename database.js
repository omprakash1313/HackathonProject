const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
class Database {
    constructor() {
        this.connect();
    }
    connect() {
        mongoose.connect(
                "mongodb+srv://admin:123@twitterclonecluster.qyn39qa.mongodb.net/TwiterCloneDB?retryWrites=true&w=majority"
            )
            .then(() => {
                console.log("Database Connected");
            })
            .catch((err) => {
                console.log("database connection error" + err);
            });
    }
}
module.exports = new Database();