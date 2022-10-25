const env = process.env?.NODE_ENV || "local";

const obj = {
    production: {
        name: env,
        secret: "",
        port: process.env.PORT
    },
    development: {
        name: env,
        secret: "",
        port: process.env.PORT
    },
    local: {
        name: env,
        secret: "",
        port: process.env.PORT
    }
}

module.exports = obj[env];