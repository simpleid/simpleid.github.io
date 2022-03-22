const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(conf) {
    conf.addPlugin(pluginSyntaxHighlight);

    return {
        dir: {
            layouts: '_layouts'
        }
    }
}