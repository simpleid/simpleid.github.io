const path = require('path');
const sass = require('sass');
const yaml = require('js-yaml');

const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginXml = require('eleventy-xml-plugin');
const pluginNavigation = require('@11ty/eleventy-navigation');
const pluginToc = require('eleventy-plugin-toc');

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

    let md = require('markdown-it');
  
    conf.setLibrary(
        'md',
        md({ html: true })
            .use(require('markdown-it-attrs'))
            .use(require('markdown-it-anchor'), { tabIndex: false })
    );

    conf.addPlugin(pluginSyntaxHighlight);
    conf.addPlugin(pluginXml);
    conf.addPlugin(pluginNavigation);
    conf.addPlugin(pluginToc);

    conf.setLiquidOptions({
        dynamicPartials: true
    });

    conf.addFilter('jsonify', function (s) {
        return JSON.stringify(s);
    });
    conf.addLiquidFilter('getNewestCollectionItemDate', pluginRss.getNewestCollectionItemDate);
    return {
        dir: {
            layouts: '_layouts'
        }
    }
}