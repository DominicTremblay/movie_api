"use strict";
/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router = express_1["default"].Router();
var users_js_1 = require("../db/queries/users.js");
router.get('/', function (req, res) {
    (0, users_js_1.getUsers)()
        .then(function (users) {
        res.json({ users: users });
    })["catch"](function (err) {
        res.status(500).json({ error: err.message });
    });
});
exports["default"] = router;
//# sourceMappingURL=users-api.js.map