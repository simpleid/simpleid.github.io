---
layout: docs
doctree: doctree1
title: return_to discovery failure
date: 2009-08-28 14:54:12
permalink: /docs/1/return_to/
redirect_from: /documentation/troubleshooting/returnto-discovery-failure/
---

You may encounter the following warning when logging into a web site using SimpleID:

> Warning: This web site has not confirmed its identity and might be fraudulent.  Do not share any personal information with this web site unless you are sure it is legitimate.  (OpenID version 2.0 return_to discovery failure)

Some web sites which supports single signon by authenticating with SimpleID (such as [Facebook](http://www.facebook.com) at the time of writing) may not work.

## What is this warning?

This warning is displayed when SimpleID is unable to verify the identity of the web site you are logging into using "relying party discovery" set out in [section 13 of the OpenID 2 specification](http://openid.net/specs/openid-authentication-2_0.html#rp_discovery).

This may be because:

- The web site you are logging into has not implemented this part of the OpenID specification.  This is amazing common, as this is an optional feature.  However, implementing this allows SimpleID to perform this additional check to enhance security.

- Your SimpleID web server was unable contact the web site to perform the discovery.  For example, your web host may have configured your web server not to allow connections to external servers, or your web server may not be able to handle HTTPS connections to external servers.

## What can I do?

Firstly, **you should make sure that the web site you are logging into is legitimate before continuing**.  Otherwise, the web site may be able to access your personal information.

If you know the operator of the web site, you may ask them to implement this part of the OpenID specification.  An excellent writeup describing how to do this can can be found here: [Why Yahoo! says your OpenID site's identity is not confirmed](http://blog.nerdbank.net/2008/06/why-yahoo-says-your-openid-site.html).

If this occurs because your web server is not configured to allow external connections, you can tell SimpleID to skip this process.  **However, note that disabling this verification can expose your identity and personal information to malicious parties.**  If you really want to do this, edit the <code>config.inc</code>/<code>config.php</code> file to edit the following configuration option:

{% highlight php %}
define('SIMPLEID_VERIFY_RETURN_URL_USING_REALM', false);
{% endhighlight %}

(Earlier versions of SimpleID do not have this configuration option.  You may need to add this line to <code>config.inc</code> manually.)

## I can't log on to the web site automatically, either

Even though you may have selected *Automatically send my information to this site for any future requests* when you log in, this is ignored until relying party discovery is implemented by the web site.