---
layout: docs
doctree: doctree1
title: Requirements for an identity
date: 2009-05-28 08:48:37
permalink: /docs/1/identity-requirements/
---

## User name

SimpleID stores identity information using the user name as the file name.  As a result, the user name which you choose must be able to be used as a valid file name under your server's operating system.

While file name rules vary between operating systems, generally user names consisting of alphanumeric characters would be acceptable.

## Password

Choosing a good password is very important, as it protects your identity from unauthorised access.  [Wikipedia](http://en.wikipedia.org/wiki/Password) contains information on how to choose a secure password.  You may wish to use the [Diceware method](http://en.wikipedia.org/wiki/Diceware) to generate your password.

SimpleID does not store your password directly.  Instead, it stores a hash of the password using the MD5 algorithm.  You will need to work out the MD5 hash of your password and provide that to SimpleID.  The [Wikipedia](http://en.wikipedia.org/wiki/MD5) entry on MD5 provides various resources to generate the hash.

## Identifier

Under the OpenID specifications, an identifier can be a [URI](http://en.wikipedia.org/wiki/URI) or an [XRI](http://en.wikipedia.org/wiki/XRI).  In most cases, an identifier will be a [URL](http://en.wikipedia.org/wiki/URI), a form of a URI.  This section assumes that you will choose an identifier in the form of a URL.

<div class="warning">
It is very important that you follow the requirements in this section carefully.  A substantial number of problems encountered when using SimpleID is caused by not having the identifier specified correctly.
</div>

The identifier must satisfy the following requirements.

- **The identifier must be unique.**  An identifier can be associated with only one identity.  If you choose an identifier which is shared with another identity, unexpected results can occur.

- **The identifier must be accessible from the Internet.**  Other web sites must be able to access the URL in order to obtain information about where your SimpleID installation is.

    In addition, your identifier should be accessible without using any redirects.  To check this, go to the web page with your identifier URL in your web browser and check that the URL displayed in the address bar is *exactly the same* as your identifier URL.

    **Pay particular attention to whether or not your identifier URL contains a trailing slash (/).**  Web servers may automatically append a trailing slash to your identifier URL if your URL points to a directory rather than a file.

- **The identifier must be "claimable".**  You must be able to edit the web page with your identifier URL to include information about your SimpleID installation.