"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// load .env data into process.env
var dotenv = __importStar(require("dotenv"));
dotenv.config();
// Web server config
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var PORT = process.env.PORT || 3001;
var app = (0, express_1["default"])();
app.set('view engine', 'ejs');
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use((0, morgan_1["default"])('dev'));
app.use(express_1["default"].urlencoded({ extended: true }));
app.use(express_1["default"].json());
// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
var moviesRoutes_1 = __importDefault(require("./routes/moviesRoutes"));
var genreRoutes_1 = __importDefault(require("./routes/genreRoutes"));
var personRoutes_1 = __importDefault(require("./routes/personRoutes"));
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/movies', moviesRoutes_1["default"]);
app.use('/api/genres', genreRoutes_1["default"]);
app.use('/api/persons', personRoutes_1["default"]);
// Note: mount other resources here, using the same pattern above
// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get('/', function (req, res) {
    res.json({ msg: 'API Home' });
});
app.listen(PORT, function () {
    console.log("App listening on port ".concat(PORT));
});
//# sourceMappingURL=server.js.map