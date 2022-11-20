"use strict";
/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router = express_1["default"].Router();
var connection_js_1 = __importDefault(require("../db/connection.js"));
router.get('/', function (req, res) {
    var query = "SELECT * FROM widgets";
    console.log(query);
    connection_js_1["default"].query(query)
        .then(function (data) {
        var widgets = data.rows;
        res.json({ widgets: widgets });
    })["catch"](function (err) {
        res
            .status(500)
            .json({ error: err.message });
    });
});
exports["default"] = router;
//# sourceMappingURL=widgets-api.js.map