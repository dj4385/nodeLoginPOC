const winston = require("winston")

const logger = winston.createLogger({
    format: winston.format.combine(winston.format.label({label: 'Log'}),winston.format.json(),winston.format.timestamp()),
    level : "info",
    transports : [
        new winston.transports.File({ filename: "error.log", level: "debug"})
    ]
})

module.exports = logger