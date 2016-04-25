var postcss = require('postcss');

module.exports = {
    process: function(input, basePath, callback){
        // @todo Find a way for the user to pass postcss modules to postcss()
        // see https://github.com/postcss/postcss-use
        postcss()
        .process(input)
        .then(function (result) {
            callback(null, result.css.toString());
        });
    }
};
