"use strict";
exports.__esModule = true;
exports.formatMovie = void 0;
var formatMovie = function (movieInfo) {
    var movie = {};
    if (movieInfo.title) {
        movie.title = movieInfo.title;
    }
    if (movieInfo.runtime_mins) {
        movie.runtime_mins = Number(movieInfo.runtime_mins);
    }
    if (movieInfo.release_date) {
        movie.release_date = new Date(movieInfo.release_date);
    }
    return movie;
};
exports.formatMovie = formatMovie;
//# sourceMappingURL=index.js.map