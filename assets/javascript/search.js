function searchApp(config) {
    return {
        q: '',
        config: config,
        index: null,
        isLoading: false,

        searchConfig: {
            fields: {
                title: { boost: 10 },
                body: { boost: 1 }
            },
            bool: 'OR',
            expand: true
        },

        loadIndex: function(index_url) {
            this.isLoading = true;
            fetch(index_url)
                .then((response) => {
                    if (!response.ok) throw new Error("HTTP error " + response.status);
                    return response.json();
                })
                .then((json) => {
                    this.index = elasticlunr.Index.load(json);
                    this.isLoading = false;
                });
        },

        get searchResults() {
            if (this.isLoading) return [];
            var store = this.index.documentStore;
            let results = this.index.search(this.q, this.searchConfig).map((k) => {
                return store.getDoc(k.ref);
            });
            return results;
        },

        preview(body) {
            return body.substring(0, 100) + "...";
        },

        slashKeyPress($event) {
            if (document.activeElement == this.$refs.searchBox) return;
            this.$refs.searchBox.focus();
            $event.preventDefault();
        },

        escKeyPress($event) {
            this.q = '';
            this.$refs.searchBox.blur();
        }
    }
}

