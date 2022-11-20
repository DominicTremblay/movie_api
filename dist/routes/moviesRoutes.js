"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router = express_1["default"].Router();
router.get('/', function (req, res) {
    res.json({ msg: 'list of movies' });
});
router.get('/:id', function (req, res) {
    res.json({ msg: 'get one movie' });
});
router.post('/', function (req, res) {
    res.json({ msg: 'create movie' });
});
router.put('/:id', function (req, res) {
    res.json({ msg: 'update movie' });
});
router["delete"]('/:id', function (req, res) {
    res.json({ msg: 'delete a movie' });
});
exports["default"] = router;
//# sourceMappingURL=moviesRoutes.js.map