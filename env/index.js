const env = process.env?.NODE_ENV || "local";

const obj = {
    production: {
        secret: ""
    },
    development: {
        secret: ""
    },
    local: {
        secret: ""
    }
}

module.exports = obj[env];