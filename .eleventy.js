const path = require('path');
const escape = require('lodash.escape');
const sass = require('sass');
const yaml = require('js-yaml');

const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginNavigation = require('@11ty/eleventy-navigation');

module.exports = function(conf) {
    conf.addDataExtension('yml', function(contents) {
        return yaml.load(contents);
    });

    conf.addPassthroughCopy('assets/files');
    conf.addPassthroughCopy('assets/*.ico');
    conf.addPassthroughCopy('assets/*.png');

    conf.addTemplateFormats("scss");
    conf.addExtension('scss', {
        outputFileExtension: 'css',
        compile: async function(content, inputPath) {
            let parsed = path.parse(inputPath);
            if (parsed.name.startsWith("_")) return;
      
            let result = sass.compileString(content, {
                loadPaths: [ parsed.dir || '.', '_sass' ]
            });

            return async (data) => {
                return result.css;
            }
        }
    });

    conf.addPlugin(pluginSyntaxHighlight);
    conf.addPlugin(pluginNavigation);

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