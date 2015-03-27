---
layout: default
title: Compare SimpleID editions
date: 2012-03-04 13:20:36
published: false
---

SimpleID comes in two editions: version 1.0 and earlier (Classic) and version 2.0 and later.

Each edition has a slightly different feature set and different system requirements.  In short:

- Classic editions have simpler system requirements, but does not support [OpenID Connect](http://openid.net/connect/)
- Version 2.0 and later support [OpenID Connect](http://openid.net/connect/), but has more onerous system requirements

A more detailed comparison is set out in the table below.


|Version 1.0 and earlier|Version 2.0 and later
-|-|-
OpenID 1.x support|Yes|Yes
OpenID 2.x support|Yes|Yes
OpenID Connect support|**No**|Yes
OpenID 1.x and 2.x extensions support|Yes|Yes
Flat files only, no database required|Yes|Yes
PHP requirements|version 5.3.0 or greater|5.3.0 or greater (ideally **5.3.3 or greater**)
PHP extension requirements|`bcmath`, `pcre`, `session`, and optionally `xml`, `hash`, `gmp`|`bcmath`, `pcre`, `session`, **`xml`**, **`hash`**, **`openssl`**, and optionally `gmp`
Server SSL certificate required|Yes|Yes
Self-signed SSL certificate allowed|Yes|**No** (for OpenID Connect)
Only single installation per domain|No|**Yes**
Access to root directory of domain|No|**Yes**