import db from '../connection.js';
export var getUsers = function () {
    return db.query('SELECT * FROM users;')
        .then(function (data) {
        return data.rows;
    });
};
//# sourceMappingURL=users.js.map