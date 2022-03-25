const elasticlunr = require('elasticlunr');
const stripHtml = require('string-strip-html').stripHtml;

module.exports = function(collection) {
    let idx = elasticlunr(function () {
        this.setRef('id');
        this.addField('title', {boost: 10});
        this.addField('body');

        collection.forEach(function (page) {
            if (page.data.lunr_exclude) return;

            // Strip HTML and punctuation
            let body = stripHtml(page.templateContent).result.replace(/[^\w]/g, ' ');

            let doc = {
                id: page.url,
                url: page.url,
                title: page.data.title,
                body: body
            };
            if (page.data.doctree) doc.doctree = page.data.doctree;
            this.addDoc(doc);
        }, this);
    });

    return idx.toJSON();
}
