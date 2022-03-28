---
layout: page
title: Documentation
date: 2009-05-13 22:19:16
redirect_from: /documentation/
permalink: /docs/
eleventyNavigation:
    key: Documentation
    order: 2
---

## User Documentation

The following user documentation is available.


{% assign docsets = collections.all | eleventyNavigation: eleventyNavigation.key %}

{% for docset in docsets %}
- [{{ docset.title }}]({{ docset.url }})
{%- endfor %}


## Developer Documentation

The developer documentation can be accessed on the [developer's site](https://github.com/simpleid/simpleid/wiki).