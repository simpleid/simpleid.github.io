---
layout: docs
doctree: doctree1
title: Using HTTPS (version 0.8 and earlier)
date: 2013-02-07 20:12:02
permalink: /docs/1/https/
---

<div class="warning">

This page only applies to SimpleID versions 0.8 and earlier.  SimpleID versions 0.9 and later mandate the use of HTTPS.

</div>

You can use enhance the security of your SimpleID server by using Transport Layer Security (TLS) to protect connections via HTTPS.  The easiest way of doing this is to set both SIMPLEID_BASE_URL configuration option in `config.inc`, and [the SimpleID URL you provide with your identifer](http://simpleid.org/documentation/getting-started/setting-identity/claim-your-identifier), to an HTTPS URL.

However, when using HTTPS, there are additional considerations.

- Some older web sites may potentially not support connections with your server via HTTPS.  You will not be able to log into these web sites.
- Both web browsers and (newer) web sites will attempt to verify your server's SSL certificate before allowing the connection.  If you SSL certificate is not obtained from a well known certificate authority (whose root certificate is commonly installed with web browsers and web servers), or is self-signed, the web site may refuse to connect with your server.  You will not be able to log into these web sites.