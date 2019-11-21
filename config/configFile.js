module.exports = {
    "serverPort": process.env.PORT || 4000, // to set process to env -> PORT=1234 node app.js
    //"dbPath": "mongodb+srv://dheeraj:dheeraj123@cluster0-8tivr.mongodb.net/test?retryWrites=true&w=majority"
    "dbPath": "mongodb://localhost:27017/userDataBase"
}