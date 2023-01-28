module.exports = {
    install: function (less, pluginManager, functions) {
        functions.add('px2vw', function (params) {
            return `${(params.value / process.env.MOBILE_BOUNDARY) * 100}vw`;
        });
    },
};
