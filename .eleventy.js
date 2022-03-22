const escape = require('lodash.escape');

const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(conf) {
    conf.addPlugin(pluginSyntaxHighlight);

    conf.setLiquidOptions({
        dynamicPartials: true
    });

    conf.addFilter('jsonify', function (s) {
        return JSON.stringify(s);
    });
    conf.addFilter('xml_escape', function(s) {
        return escape(s);
    });

    conf.addLiquidFilter('date_to_rfc822', pluginRss.dateToRfc3339);
    conf.addLiquidFilter('getNewestCollectionItemDate', pluginRss.getNewestCollectionItemDate);

    return {
        dir: {
            layouts: '_layouts'
        }
    }
}