---
layout: docs
title: System requirements
permalink: /docs/2/system-requirements/
eleventyNavigation:
    key: 2/system-requirements
    title: System requirements
    parent: 2/_getting-started
    order: 10
---

## Introduction

> [!NOTE]
> Server requirements for SimpleID version 2.0 and later are significantly more stringent than version 1.0 and earlier.
> As a general rule, you will need to be hosting your own server to be able to run SimpleID 2.0 without significant workarounds.
> 
> If you are upgrading from version 1.0, please make sure your server meets the new requirements.

## Minimum requirements

To host a SimpleID installation requires:

1. your own domain name, or at least access to the `/.well-known` subdirectory of the domain name
(this is required for OpenID Connect or WebFinger support);
2. a web server with [HTTPS](#https) support for that domain name;
3. the ability for the web server to write files to the filesystem;
4. [PHP](http://www.php.net/), version 8.0 or greater.  The following extensions must be enabled (they are enabled for most PHP installations):
    - gmp;
    - pcre;
    - session;
    - xml;
    - xmlreader;
    - openssl;
    - hash;
    - sodium.
5. PHP needs to be configured so that <code>register_globals</code> and <code>short_open_tag</code> are switched **off**. See the [PHP manual](http://www.php.net/manual/en/security.globals.php) for further details.
6. If you are using [PHP Suhosin](http://www.hardened-php.net/suhosin/index.html), or some other query filter, you may need to increase the [`suhosin.get.max_value_length`](http://www.hardened-php.net/suhosin/configuration.html#suhosin.get.max_value_length) configuration to at least 1024, as SimpleID uses very long query strings.


## Recommended requirements

In addition to the minimum requirements, installing SimpleID would be much easier if you have: 

1. shell access to your server;
2. access to the OpenSSL command line tools; and
3. [Composer](https://getcomposer.org/) installed on the server
