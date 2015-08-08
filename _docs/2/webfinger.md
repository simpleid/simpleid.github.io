---
layout: docs
doctree: doctree2
title: WebFinger
permalink: /docs/2/webfinger/
---

{% include doc_toc.md %}

## Introduction

The [WebFinger protocol](http://tools.ietf.org/html/rfc7033) is the discovery protocol used by
OpenID Connect.

## Modules

The WebFinger protocol is implemented in the `SimpleID\Protocols\WebFinger\WebFingerModule` module.
This module is enabled by default.

## User configuration

In order to use the WebFinger protocol, at least one of the following values must exist
in the user file:

1. `webfinger.acct`
2. `userinfo.email` 

Either of these values can be used to identify the e-mail (`mailto:`) or `acct:` address
belonging to the user.  The domain of this address must be the same as the domain of the
SimpleID installation.

For example, if SimpleID is installed at `server.example.net`:

{% highlight json %}
{
    "webfinger": {
        "acct": "bob@server.example.net"
    }
}
{% endhighlight %}

## Client configuration

None.

## Other configuration

### URL rewrite

The SimpleID WebFinger endpoint URI is `/.well-known/webfinger`.  This is the same as the
endpoint URI specified in the WebFinger protocol.

However, if SimpleID is installed in a subdirectory instead of the root, you will need to
rewrite or redirect the URI to the SimpleID WebFinger endpoint.  For example, if you have
installed SimpleID into `https://server.example.org/simpleid/` you will need to redirect
`https://server.example.org/.well-known/webfinger` to `https://server.example.org/simpleid/.well-known/webfinger`.

### Cross-origin requests

The WebFinger module supports a single configuration variable, `webfinger_access_control_allow_origin`, which
can be set in `config.php`.  This variable specifies the `Access-Control-Allow-Origin` header to be returned
on WebFinger queries.
