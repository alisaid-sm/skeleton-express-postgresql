const redis = require('redis');
const client = redis.createClient();
const { success } = require('../helpers/response')

module.exports = {
    getAll: (req, res, next) => {
        client.get('example', (err, data) => {
            if (data) {
                data = JSON.parse(data)
                success(res, 200, data, 'ok(from redis)')
            } else {
                next()
            }
        })
    }
}