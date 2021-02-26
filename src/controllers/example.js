const exampleModels = require('../models/example')
const upload = require('../helpers/upload')
const { success, failed } = require('../helpers/response')

const example = {
    getAll: (req, res) => {
        try {
            exampleModels.getAll()
                .then((result) => {
                    success(res, 200, result.rows, 'ok')
                })
                .catch((err) => {
                    failed(res, 500, [], err.message)
                });
        } catch (error) {
            failed(res, 500, [], 'internal server error')
        }
    },
    getById: (req, res) => {
        try {
            exampleModels.getById(req.params.id)
                .then((result) => {
                    success(res, 200, result.rows, 'ok')
                })
                .catch((err) => {
                    failed(res, 404, [], err.message)
                });
        } catch (error) {
            failed(res, 500, [], 'internal server error')
        }
    },
    getByAbsent: (req, res) => {
        try {
            exampleModels.getByAbsent(req.params.absent)
                .then((result) => {
                    if (result.rows.length == 0) {
                        failed(res, 404, [], 'murid dengan absent ' + req.params.absent + ' tidak ada') 
                    } else {
                        success(res, 200, result.rows, 'ok')
                    }
                })
                .catch((err) => {
                    failed(res, 404, [], err.message)
                });
        } catch (error) {
            failed(res, 500, [], 'internal server error')
        }
    },
    create: (req, res) => {
        try {
            exampleModels.create(req.body)
                .then((result) => {
                    success(res, 201, result.rows, 'ok')
                })
                .catch((err) => {
                    failed(res, 400, [], err.message)
                });
        } catch (error) {
            failed(res, 500, [], 'internal server error')
        }
    },
    update: (req, res) => {
        try {
            exampleModels.update(req.body, req.params.id)
                .then((result) => {
                    success(res, 200, result.rows, 'ok')
                })
                .catch((err) => {
                    failed(res, 400, [], err.message)
                });
        } catch (error) {
            failed(res, 500, [], 'internal server error')
        }
    },
    delete: (req, res) => {
        try {
            exampleModels.delete(req.params.id)
                .then((result) => {
                    success(res, 200, result.rows, 'ok')
                })
                .catch((err) => {
                    failed(res, 500, [], err.message)
                });
        } catch (error) {
            failed(res, 500, [], 'internal server error')
        }
    }
}

module.exports = example