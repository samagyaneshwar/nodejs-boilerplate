const { HTTP_STATUS } = require("../shared/constants");

module.exports = () => {

    return (req, res, next) => {
        res.ok = (data) => {
            const obj = { status: HTTP_STATUS.OK, success: true, message: "ok", data: {} };
            return res.status(HTTP_STATUS.OK).json({ ...obj, ...data });
        };

        res.created = (data) => {
            const obj = { status: HTTP_STATUS.CREATED, success: true, message: "created", data: {} };
            return res.status(HTTP_STATUS.CREATED).json({ ...obj, ...data });
        };

        res.noContent = (data) => {
            const obj = { status: HTTP_STATUS.NO_CONTENT, success: false, message: "no_content", data: {} };
            return res.status(HTTP_STATUS.NO_CONTENT).json({ ...obj, ...data });
        };

        res.badRequest = (data) => {
            const obj = { status: HTTP_STATUS.BAD_REQUEST, success: false, message: "bad_request", data: {} };
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ ...obj, ...data });
        };

        res.unauthorized = (data) => {
            const obj = { status: HTTP_STATUS.UNAUTHORIZED, success: false, message: "unauthorized", data: {} };
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({ ...obj, ...data });
        };

        res.forbidden = (data) => {
            const obj = { status: HTTP_STATUS.FORBIDDEN, success: false, message: "forbidden", data: {} };
            return res.status(HTTP_STATUS.FORBIDDEN).json({ ...obj, ...data });
        };

        res.notFound = (data) => {
            const obj = { status: HTTP_STATUS.NOT_FOUND, success: false, message: "not_found", data: {} };
            return res.status(HTTP_STATUS.NOT_FOUND).json({ ...obj, ...data });
        };

        res.methodNotAllowed = (data) => {
            const obj = { status: HTTP_STATUS.METHOD_NOT_ALLOWED, success: false, message: "method_not_allowed", data: {} };
            return res.status(HTTP_STATUS.METHOD_NOT_ALLOWED).json({ ...obj, ...data });
        };

        res.serverError = (data) => {
            const obj = { status: HTTP_STATUS.INTERNAL_SERVER_ERROR, success: false, message: "server_error", data: {} };
            return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ...obj, ...data });
        };

        res.tooManyRequests = (data) => {
            const obj = { status: HTTP_STATUS.TOO_MANY_REQUESTS, success: false, message: "Too many request", data: {} };
            return res.status(HTTP_STATUS.TOO_MANY_REQUESTS).json({ ...obj, ...data });
        };

        next();
    };
};
