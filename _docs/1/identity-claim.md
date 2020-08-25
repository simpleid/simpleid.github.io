---
layout: docs
doctree: doctree1
title: Claim your identifier
date: 2009-05-27 21:00:48
permalink: /docs/1/identity-claim/
redirect_from: /documentation/getting-started/setting-identity/claim-your-identifier/
---

Claiming your identifier is the way you show that you have control over that identifier.  This involves editing the page with the identifier URL to embed information about your SimpleID installation.  This then allows web sites to find out where to find SimpleID when you attempt to log into them using OpenID authentication. 

There are various ways in which you can claim your identifier.

## Use &lt;link&gt; tags

The easiest way to claim your identifier is to use &lt;link&gt; tags.

To do this, edit the web page returned by the identifier URL.  Copy and paste the following section between the &lt;head&gt; and &lt;/head&gt; tags:

{% highlight html %}
<link rel="openid.server" href="http://www.example.com/simpleid/" />
<link rel="openid2.provider" href="http://www.example.com/simpleid/" />
{% endhighlight %}

Replace the URL http://www.example.com/simpleid/ with one which points to where you have moved the <code>www</code> directory of the SimpleID installation.

<div class="warning">
The URL specified by these link tags <strong>must contain a trailing slash</strong>, unlike the <code>SIMPLEID_BASE_URL</code> configuration option in your <code>config.inc</code>. Otherwise, your installation may not work for certain web sites.
</div>

## Use the YADIS Protocol

You can also use the [YADIS protocol](http://yadis.org/wiki/Main_Page) to claim your identifier.  In short, the YADIS protocol requires you to create an XML file called *an XRD document*, then modifying the web page returned by the identifier URL to point to that document.

SimpleID automatically generates a XRD document for you, which should be suitable in most cases.  Go to <var>http://www.example.com/simpleid/</var>index.php?q=xrds/<var>username</var>, where <var>http://www.example.com/simpleid/</var> is where you have moved the <code>www</code> directory of the SimpleID installation, and <var>username</var> is your user name.  SimpleID should return a file, which you can then download and open with a text editor.

The YADIS protocol specifies three ways in which you can modify the web page returned by the identifier URL to point to the XRD document.

1. If the web page returned by the identifier URL is generated programmatically, you can detect whether the <code>Accept</code> HTTP header contains the MIME type <code>application/xrds+xml</code>, and if so, return the document directly or redirect the response to the document.

2. If the web page returned by the identifier URL is generated programmatically, you can also return the following HTTP header in your response:

    <code>X-XRDS-Location: http://www.example.com/simpleid/index.php?q=xrds/username</code>

3. Otherwise, you can include the following section between the &lt;head&gt; and &lt;/head&gt; tags.

{% highlight html %}
<meta http-equiv="X-XRDS-Location" content="http://www.example.com/simpleid/index.php?q=xrds/username" />
{% endhighlight %}