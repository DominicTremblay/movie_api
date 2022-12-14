"use strict";
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
exports.__esModule = true;
var client_1 = require("@prisma/client");
var genres_1 = require("./seeds/genres");
var movies_1 = require("./seeds/movies");
var persons_1 = require("./seeds/persons");
var prisma = new client_1.PrismaClient();
var seedGenres = function (genres) { return __awaiter(void 0, void 0, void 0, function () {
    var _i, genres_2, genre;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, genres_2 = genres;
                _a.label = 1;
            case 1:
                if (!(_i < genres_2.length)) return [3 /*break*/, 4];
                genre = genres_2[_i];
                return [4 /*yield*/, prisma.genre.create({
                        data: genre
                    })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}); };
var seedPersons = function (persons) { return __awaiter(void 0, void 0, void 0, function () {
    var _i, persons_2, person;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, persons_2 = persons;
                _a.label = 1;
            case 1:
                if (!(_i < persons_2.length)) return [3 /*break*/, 4];
                person = persons_2[_i];
                return [4 /*yield*/, prisma.person.create({
                        data: person
                    })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}); };
var seedMovies = function (movies) { return __awaiter(void 0, void 0, void 0, function () {
    var _i, movies_2, movie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, movies_2 = movies;
                _a.label = 1;
            case 1:
                if (!(_i < movies_2.length)) return [3 /*break*/, 4];
                movie = movies_2[_i];
                return [4 /*yield*/, prisma.movie.create({
                        data: {
                            title: movie.title,
                            release_date: movie.release_date,
                            runtime_mins: movie.runtime_mins,
                            movie_genres: {
                                create: movie.movie_genres.map(function (genreId) { return ({
                                    genre: {
                                        connect: {
                                            id: genreId
                                        }
                                    }
                                }); })
                            },
                            movie_casts: {
                                create: movie.movie_casts.map(function (cast) { return ({
                                    character_name: cast.character_name,
                                    person: {
                                        connect: {
                                            id: cast.id
                                        }
                                    }
                                }); })
                            }
                        }
                    })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}); };
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, seedGenres(genres_1.genres)];
            case 1:
                _a.sent();
                return [4 /*yield*/, seedPersons(persons_1.persons)];
            case 2:
                _a.sent();
                return [4 /*yield*/, seedMovies(movies_1.movies)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
run()["catch"](function (err) {
    console.log("Error: ".concat(err.message));
    process.exit(1);
})["finally"](function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=seed.js.map