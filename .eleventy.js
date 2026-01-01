const path = require('path');
const sass = require('sass');
const yaml = require('js-yaml');
const html_entities = require('html-entities');

const searchFilter = require("./_src/searchFilter");

const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require('@11ty/eleventy-plugin-rss');
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
    conf.addPassthroughCopy('CNAME');
    conf.addPassthroughCopy('robots.txt');
    conf.addPassthroughCopy('assets/files');
    conf.addPassthroughCopy('assets/*.ico');
    conf.addPassthroughCopy('assets/*.png');
    conf.addPassthroughCopy('assets/**/*.js');

    // Templates
    let md = require('markdown-it');
    conf.setLibrary(
        'md',
        md({ html: true })
            .use(require('markdown-it-attrs'))
            .use(require('markdown-it-anchor'), { tabIndex: false })
            .use(require('markdown-it-github-alerts'))
    );

    conf.setLiquidOptions({
        dynamicPartials: true,
        ownPropertyOnly: true  // Fix for CVE-2022-25948 for liquidjs < v10
    });

    // Filters
    conf.addFilter('doctree', (collection, key) => {
        if (!key) return collection;
        return collection.filter((page) => page.data.doctree == key);
    })
    conf.addFilter('search_index', searchFilter);
    conf.addFilter('xml_escape', (str) => {
        return html_entities.encode(str, { level: 'xml' })
    })
    conf.addLiquidFilter('getNewestCollectionItemDate', pluginRss.getNewestCollectionItemDate);
    conf.addLiquidFilter('date_to_rfc822', pluginRss.dateToRfc822);

    // Extensions
    conf.addTemplateFormats('scss');
    conf.addExtension('scss', {
        outputFileExtension: 'css',
        useLayouts: false,
        compile: async function(inputContent, inputPath) {
            let parsedPath = path.parse(inputPath);
            if (parsedPath.name.startsWith('_')) return;

            let result = sass.compileString(inputContent, {
                loadPaths: [
                    parsedPath.dir || ".",
                    '_sass'
                ],
                style: 'compressed'
            });

            this.addDependencies(inputPath, result.loadedUrls);

            return async (data) => {
                return result.css;
            };
        }
    });

    // Plugins
    conf.addPlugin(pluginSyntaxHighlight, {
        preAttributes: {
            tabindex: 0,
            'data-highlight': 'true'
        }
    });
    conf.addPlugin(pluginNavigation);
    conf.addPlugin(pluginToc);

    return {
        dir: {
            layouts: '_layouts'
        }
    }
}
