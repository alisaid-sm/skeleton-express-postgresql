const db = require('../configs/connection')

const example = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM example', (err, result) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(result);
                }
            });
        })
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM example WHERE id=$1', [id], (err, result) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(result);
                }
            });
        })
    },
    getByAbsent: (absent) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM example WHERE absent=${absent}`, (err, result) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(result);
                }
            });
        })
    },
    create: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO example (name, absent) VALUES ('${data.name}', '${data.absent}')`, (err, result) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(result);
                }
            });
        })
    },
    update: (data, id) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE example SET name='${data.name}', absent='${data.absent}', updated-at='${data.updatedAt}' WHERE id=$1`, [id], (err, result) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(result);
                }
            });
        })
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM example WHERE id=${id}`, (err, result) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(result);
                }
            });
        })
    }
}

module.exports = example