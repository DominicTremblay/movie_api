"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.createMovie = exports.getMovieById = exports.getMovieList = void 0;
var client_1 = require("@prisma/client");
var connection_1 = __importDefault(require("../connection"));
var getMovieList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var movieList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, connection_1["default"].movie.findMany({
                    include: {
                        movie_genres: {
                            include: {
                                genre: true
                            }
                        },
                        movie_casts: {
                            include: {
                                person: true
                            }
                        }
                    }
                })];
            case 1:
                movieList = _a.sent();
                return [2 /*return*/, movieList];
        }
    });
}); };
exports.getMovieList = getMovieList;
var getMovieById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var movie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, connection_1["default"].movie.findUnique({
                    where: {
                        id: id
                    },
                    include: {
                        movie_genres: {
                            include: {
                                genre: true
                            }
                        },
                        movie_casts: {
                            include: {
                                person: true
                            }
                        }
                    }
                })];
            case 1:
                movie = _a.sent();
                return [2 /*return*/, movie];
        }
    });
}); };
exports.getMovieById = getMovieById;
var createMovie = function (_a) {
    var title = _a.title, release_date = _a.release_date, runtime = _a.runtime, genres = _a.genres, cast = _a.cast;
    return __awaiter(void 0, void 0, void 0, function () {
        var genresFound, genreIds, castNames, personsFound, namesFound, personsToAdd, persons;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, connection_1["default"].genre.findMany({
                        where: {
                            genre: {
                                "in": genres
                            }
                        }
                    })];
                case 1:
                    genresFound = _b.sent();
                    genreIds = genresFound.map(function (genre) { return genre.id; });
                    castNames = cast.map(function (member) { return "".concat(member.first_name, " ").concat(member.last_name); });
                    // const castNames = ['Tom Hanks', 'Tom Cruise'];
                    console.log({ castNames: castNames });
                    return [4 /*yield*/, connection_1["default"].$queryRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      SELECT * FROM \"Person\"\n      WHERE concat(first_name, ' ', last_name)\n      IN (", ")"], ["\n      SELECT * FROM \"Person\"\n      WHERE concat(first_name, ' ', last_name)\n      IN (", ")"])), client_1.Prisma.join(castNames))];
                case 2:
                    personsFound = _b.sent();
                    console.log(personsFound);
                    namesFound = personsFound.map(function (_a) {
                        var first_name = _a.first_name, last_name = _a.last_name;
                        return "".concat(first_name, " ").concat(last_name);
                    });
                    personsToAdd = cast.filter(function (_a) {
                        var first_name = _a.first_name, last_name = _a.last_name;
                        return !namesFound.includes("".concat(first_name, " ").concat(last_name));
                    });
                    return [4 /*yield*/, connection_1["default"].person.createMany({
                            data: personsToAdd.map(function (_a) {
                                var first_name = _a.first_name, last_name = _a.last_name;
                                return ({
                                    first_name: first_name,
                                    last_name: last_name
                                });
                            })
                        })];
                case 3:
                    persons = _b.sent();
                    console.log({ personsToAdd: personsToAdd });
                    console.log({ persons: persons });
                    return [2 /*return*/];
            }
        });
    });
};
exports.createMovie = createMovie;
var templateObject_1;
//# sourceMappingURL=movieQueries.js.map