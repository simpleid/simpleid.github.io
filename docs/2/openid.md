---
layout: docs
title: OpenID
permalink: /docs/2/openid/
toc: true
eleventyNavigation:
    key: 2/openid
    title: OpenID
    parent: 2/_identity-protocols
    order: 30
---

## Introduction

The [OpenID protocol](http://openid.net/specs/openid-authentication-2_0.html) is the original
federated identity protcol from the OpenID Foundation.  SimpleID supports versions 1.1 and 2.0
of the protocol.

It has been superceded by the OpenID Connect protocol.

## Modules

The core OpenID protocol is implemented in the `SimpleID\Protocols\OpenID\OpenIDModule` module.
This module is enabled by default.

Additional modules related to the OpenID protocol are set out in the table below.

| Module                                                         | Description                                             | Enabled by default? |
|----------------------------------------------------------------|---------------------------------------------------------|---------------------|
| SimpleID\Protocols\OpenID\Extensions\SRegOpenIDExtensionModule | Implements the Simple Registration Extension            | Yes                 |
| SimpleID\Protocols\OpenID\Extensions\AXOpenIDExtensionModule   | Implements the Attribute Exchange Extension             | No                  |
| SimpleID\Protocols\OpenID\Extensions\PAPEOpenIDExtensionModule | Implements the Provider Authentication Policy Extension | No                  |

## User configuration

User configuration for the OpenID protocol is set out under the `openid` object in the user file.

In order to use the OpenID protocol, the user configuration must contain an `identity` value,
containing the [OpenID identifier](#identifier) for the user.  For example:

```yaml
openid: 
    identity: "http://example.com/"
```

### Identifier  {#identifier}

Under the OpenID specifications, an identifier can be a [URI](http://en.wikipedia.org/wiki/URI) or an [XRI](http://en.wikipedia.org/wiki/XRI).  In most cases, an identifier will be a [URL](http://en.wikipedia.org/wiki/URI), a form of a URI.  This section assumes that you will choose an identifier in the form of a URL.

{% panel 'warning' %}
It is very important that you follow the requirements in this section carefully.  A substantial number of problems encountered when using SimpleID is caused by not having the identifier specified correctly.
{% endpanel %}

The identifier must satisfy the following requirements.

- **The identifier must be unique.**  An identifier can be associated with only one identity.  If you choose an identifier which is shared with another identity, unexpected results can occur.

- **The identifier must be accessible from the Internet.**  Other web sites must be able to access the URL in order to obtain information about where your SimpleID installation is.

    In addition, your identifier should be accessible without using any redirects.  To check this, go to the web page with your identifier URL in your web browser and check that the URL displayed in the address bar is *exactly the same* as your identifier URL.

    **Pay particular attention to whether or not your identifier URL contains a trailing slash (/).**  Web servers may automatically append a trailing slash to your identifier URL if your URL points to a directory rather than a file.

- **The identifier must be "claimable".**  You must be able to edit the web page with your identifier URL to include information about your SimpleID installation.

## Client configuration

None.  All clients (OpenID relying parties) register with the SimpleID server dynamically.

## Other configuration

### Claiming your identifier  {#claiming}

Claiming your identifier is the way you show that you have control over that identifier.  This involves editing the page with the identifier URL to embed information about your SimpleID installation.  This then allows web sites to find out where to find SimpleID when you attempt to log into them using OpenID authentication. 

There are various ways in which you can claim your identifier.

#### Use &lt;link&gt; tags

The easiest way to claim your identifier is to use &lt;link&gt; tags.

To do this, edit the web page returned by the identifier URL.  Copy and paste the following section between the &lt;head&gt; and &lt;/head&gt; tags:

```html
<link rel="openid.server" href="http://www.example.com/simpleid/" />
<link rel="openid2.provider" href="http://www.example.com/simpleid/" />
```

Replace the URL http://www.example.com/simpleid/ with one which points to where you have moved the <code>www</code> directory of the SimpleID installation.

{% panel 'warning' %}
The URL specified by these link tags <strong>must contain a trailing slash</strong>, unlike the <code>canonical_base_path</code> configuration option in your <code>config.php</code>. Otherwise, your installation may not work for certain web sites.
{% endpanel %}

#### Use the YADIS Protocol

You can also use the [YADIS protocol](http://yadis.org/wiki/Main_Page) to claim your identifier.  In short, the YADIS protocol requires you to create an XML file called *an XRD document*, then modifying the web page returned by the identifier URL to point to that document.

SimpleID automatically generates a XRD document for you, which should be suitable in most cases.  Go to <var>http://www.example.com/simpleid/</var>index.php?q=xrds/<var>username</var>, where <var>http://www.example.com/simpleid/</var> is where you have moved the <code>www</code> directory of the SimpleID installation, and <var>username</var> is your user name.  SimpleID should return a file, which you can then download and open with a text editor.

The YADIS protocol specifies three ways in which you can modify the web page returned by the identifier URL to point to the XRD document.

1. If the web page returned by the identifier URL is generated programmatically, you can detect whether the <code>Accept</code> HTTP header contains the MIME type <code>application/xrds+xml</code>, and if so, return the document directly or redirect the response to the document.

2. If the web page returned by the identifier URL is generated programmatically, you can also return the following HTTP header in your response:

    <code>X-XRDS-Location: http://www.example.com/simpleid/index.php?q=xrds/username</code>

3. Otherwise, you can include the following section between the &lt;head&gt; and &lt;/head&gt; tags.

```html
<meta http-equiv="X-XRDS-Location" content="http://www.example.com/simpleid/index.php?q=xrds/username" />
```

## Using OpenID

### Logging in

To log in into an OpenID-enabled site:

1. You should see an OpenID log in box on your site, which should look like the following.

    ![OpenID login box](/assets/files/openid-login-box.png)

2. Type your [identifier URL](/docs/2/identity) and submit the form.  The site will now contact your SimpleID server to establish a secure connection.  Depending on the speed of your web server, this may take about half a minute.

3. If you have not logged into SimpleID, SimpleID will [ask you to do so](/docs/2/login).

4. When you log into an OpenID-enabled site for the first time, you will be presented with a page that is similar to the following.

    ![Site login page](/assets/files/rp.png)

    The page will vary depending the extensions you have installed.

5. To continue logging in to the site, click **OK**.  The site will then become one of your trusted sites.

    If you select the **Automatically send my information to this site for any future requests** check box, this page won't appear again the next time you log in to this site.

{% panel 'note' %}
Some sites require you to log into SimpleID *before* logging into the site.
{% endpanel %}

{% panel 'warning' %}
You can only log in to each SimpleID installation as one user (and so one OpenID identifier) at any one time.
{% endpanel %}
