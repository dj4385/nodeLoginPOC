const winstron = require('winston')

logger = winstron.createLogger({
    level: 'info',
    format: winstron.format.json,
    defaultMeta: { service: 'userservice' },
    transports : [
        new winstron.transports.File({
            filename: 'error.log',
            level: 'error'
        }),
        new winstron.transports.File({
            filename: 'combined.log',
            level: 'error'
        })
    ]
})