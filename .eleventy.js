const path = require('path');
const sass = require('sass');
const yaml = require('js-yaml');

const searchFilter = require("./_src/searchFilter");

const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginXml = require('eleventy-xml-plugin');
const pluginNavigation = require('@11ty/eleventy-navigation');
const pluginToc = require('eleventy-plugin-toc');

module.exports = function(conf) {
    // Collections
    // Creates the docsets collection
    conf.addCollection('docsets', function(api) {
        return api.getAll().filter((page) => {
            return ((typeof page.data.doctree === 'string') && (page.filePathStem.endsWith('/index')));
        });
    });

    // Data
    conf.addDataExtension('yml', function(contents) {
        return yaml.load(contents);
    });

    // Copy
    conf.addPassthroughCopy('assets/files');
    conf.addPassthroughCopy('assets/*.ico');
    conf.addPassthroughCopy('assets/*.png');

    // Templates
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

    conf.setLiquidOptions({
        dynamicPartials: true
    });

    conf.addFilter('doctree', (collection, key) => {
        if (!key) return collection;
        return collection.filter((page) => page.data.doctree == key);
    })
    conf.addFilter('search_index', searchFilter);
    conf.addLiquidFilter('getNewestCollectionItemDate', pluginRss.getNewestCollectionItemDate);

    // Plugins
    conf.addPlugin(pluginSyntaxHighlight, {
        preAttributes: {
            tabindex: 0,
            'data-highlight': 'true'
        }
    });
    conf.addPlugin(pluginXml);
    conf.addPlugin(pluginNavigation);
    conf.addPlugin(pluginToc);

    return {
        dir: {
            layouts: '_layouts'
        }
    }
}