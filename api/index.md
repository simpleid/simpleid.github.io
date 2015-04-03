---
layout: page
title: SimpleID API Documentation
---

This page contains reference API documentation.

## Latest Snapshot
  
- [API Documentation](/api/trunk/apidocs)
- [PHP XRef](/api/trunk/xref)

## Branches

<dl>

{% for branch in site.data.apidocs %}
    <dt>{{ branch[0] }}</dt>
    <dd>
        {% if branch[1] contains "apidocs" %}
            <a href="{{ branch[0] | prepend: site.baseurl | prepend: site.url }}/apidocs/">API Documentation</a>&nbsp;&nbsp;
        {% endif %}
        {% if branch[1] contains "xref" %}
            <a href="{{ branch[0] | prepend: site.baseurl | prepend: site.url }}/xref/">PHP XRef</a>
        {% endif %}
    </dd>
{% endfor %}
