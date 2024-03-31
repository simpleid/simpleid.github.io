const path = require('path');
const sass = require('sass');
const yaml = require('js-yaml');
const html_entities = require('html-entities');

const searchFilter = require("./_src/searchFilter");

const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginSass = require('eleventy-sass');
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

    // Short codes
    conf.addPairedShortcode('panel', (content, type) => {
        return `<div class="${type}"><div class="note-icon"><svg viewBox="0 0 24 24"><use xlink:href="#svg-${type}"></use></svg></div>
<div class="note-content">

${content}

</div></div>`;
    });

    // Plugins
    conf.addPlugin(pluginSyntaxHighlight, {
        preAttributes: {
            tabindex: 0,
            'data-highlight': 'true'
        }
    });
    conf.addPlugin(pluginSass, {
        sass: {
            loadPaths: [ '_sass' ]
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
