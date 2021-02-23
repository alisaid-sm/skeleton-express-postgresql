const response = {
    success: (res, code, data, message) => {
        const result = {
            message,
            success: true,
            code,
            data
        };

        res.status(code).json(result)
    },
    failed: (res, code, data, message) => {
        const result = {
            message,
            success: false,
            code,
            data
        };

        res.status(code).json(result)
    },
    successWithMeta: (res, data, meta, message) => {
        const result = {
            message,
            success: true,
            code: 200,
            meta,
            data
        };

        res.status(200).json(result)
    },
    successToken: (res, data, message) => {
        const result = {
            message,
            success: true,
            code: 200,
            data
        };

        res.status(200).json(result)
    },
    errToken: (res, data, message) => {
        const result = {
            message,
            success: false,
            code: 500,
            data
        };

        res.status(500).json(result)
    },
    errTokenExpired: (res, data, message) => {
        const result = {
            message,
            success: false,
            code: 500,
            data
        };

        res.status(500).json(result)
    }

};

module.exports = response