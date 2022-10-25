const env = process.env?.NODE_ENV || "local";

const obj = {
    production: {
        secret: "",
        port: process.env.PORT
    },
    development: {
        secret: "",
        port: process.env.PORT
    },
    local: {
        secret: "",
        port: process.env.PORT
    }
}

module.exports = obj[env];