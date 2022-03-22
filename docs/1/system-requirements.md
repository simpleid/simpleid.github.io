---
layout: docs
doctree: doctree1
title: System Requirements
date: 2012-03-23 21:27:13
permalink: /docs/1/system-requirements/
redirect_from: /documentation/getting-started/system-requirements/
---

The following are the requirements to run SimpleID.

## Server Requirements

<div class="note">Server requirements for version 0.9 and later versions for SimpleID are significantly different from version 0.8 and earlier.  If you are upgrading, please make sure your server meets the new requirements.</div>

To host a SimpleID installation requires:

1. a web server with [HTTPS](#https) support;
2. the ability for the web server to write files to the filesystem; and
3. [PHP](http://www.php.net/), version 5.3.0 or greater.  The following extensions must be enabled (they are enabled for most PHP installations):
    - bcmath;
    - pcre;
    - session;
    - xml;
    - hash.
4. PHP needs to be configured so that <code>register_globals</code> is switched **off**. See the [PHP manual](http://www.php.net/manual/en/security.globals.php) for further details.
5. If you are using [PHP Suhosin](http://www.hardened-php.net/suhosin/index.html), or some other query filter, you may need to increase the [`suhosin.get.max_value_length`](http://www.hardened-php.net/suhosin/configuration.html#suhosin.get.max_value_length) configuration to at least 1024, as SimpleID uses very long query strings.

You can also have the following extension enabled for better performance:

- gmp

Note the second requirement means that you can't install SimpleID on web servers which does not allow you to write files to it.

### HTTPS support {#https}

From SimpleID version 0.9, HTTPS support is **mandatory**.  The evolving security environment means that it is no longer safe to accept logins from unencrypted connections.

If you run your own server, there are now many inexpensive certificate authorities from which to get certificates.  Self-signed certificates are also acceptable (although not recommended).

If you are using a shared server from a web hosting provider, check with them regarding SSL capabilities.  Many offer a shared SSL certificate to the server at no extra cost.

You should also ensure that the web server software (including its SSL library) are secure and kept up-to-date.

## Browser Requirements

In order to access SimpleID with your browser, your browser must support JavaScript in general, and [jQuery](http://jquery.com/) in particular.

The following browsers are known to work with jQuery:

- Internet Explorer, version 6.0 or later
- Mozilla Firefox, version 2.0 or later
- Safari, version 2.0 or later
- Opera, version 9.0 or later
