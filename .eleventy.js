const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(conf) {
    conf.addPlugin(pluginSyntaxHighlight);

    conf.setLiquidOptions({
        dynamicPartials: true
    });

    conf.addFilter('jsonify', function (s) {
        return JSON.stringify(s);
    });

    return {
        dir: {
            layouts: '_layouts'
        }
    }
}