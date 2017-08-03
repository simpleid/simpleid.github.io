---
layout: docs
doctree: doctree1
title: Extensions bundled with SimpleID
date: 2011-07-21 20:58:06
redirect_from: /docs/1/extensions-bundled/
---

A number of extensions are bundled with the default SimpleID distribution.  These are described below.

## Attribute Exchange Extension    {#ax}

This extension, <code>ax.extension.php</code>, partially implements the [OpenID Attribute Exchange Extension](http://openid.net/specs/openid-attribute-exchange-1_0.html).  It basically allows you to specify identity information, and have SimpleID provide them automatically to web sites which request them.

This extension only implements the [fetch message](http://openid.net/specs/openid-attribute-exchange-1_0.html#fetch) section of the extension.  That is, it allows relying parties to retrieve identity data from SimpleID, but it does not allow relying parties to push data back to SimpleID.

### Specifying attributes

The attributes is specified in your [identity file](/docs/1/identity-files).  Simply add a section called <code>ax</code> in your identity file and specify the details there.

For what can be specified in this section, see the [specifications](http://openid.net/specs/openid-attribute-exchange-1_0.html).  For a list of common attributes, see the [draft specifications](http://openid.net/specs/openid-attribute-properties-list-1_0-01.html).

An example is given below.

{% highlight ini %}
[ax]
http://openid.net/schema/company/name="Example Company Limited"
http://openid.net/schema/company/title="Managing Director"
http://openid.net/schema/contact/web/blog="http://simpleid.sourceforge.net/"
{% endhighlight %}

### Sending identity data to an OpenID site

When you log into an OpenID site, and the site asks for your identity data using this extension, you will see extra information in the [log in page](/docs/1/openid).

## Provider Authentication Policy Extension    {#pape}

This extension, <code>pape.extension.php</code>, implements the [OpenID Provider Authentication Policy Extension](http://openid.net/specs/openid-provider-authentication-policy-extension-1_0.html).  It allows SimpleID to tell the relying party the authentication policies applied when a user logs into SimpleID.  It also allows relying parties to require re-authentication once a user has logged in for a particular period of time.

## Simple Registration Extension    {#sreg}

This extension, <code>sreg.extension.php</code>, implements the [OpenID Simple Registration Extension](http://openid.net/specs/openid-simple-registration-extension-1_0.html).  It basically allows you to specify details which you normally provide when you register for web sites (such as your name and e-mail address), and have SimpleID provide them automatically to web sites which request them.

### Specifying registration information

The registration information is specified in your [identity file](/docs/1/identity-files).  Simply add a section called <code>sreg</code> in your identity file and specify the details there.

For what can be specified in this section, see the [specifications](http://openid.net/specs/openid-simple-registration-extension-1_0.html).  Note that the registration information in the identity file are specified without the <code>openid.sreg.</code> prefix.

An example is given below.

<blockcode language="ini">
[sreg]
nickname=Example
email=example@example.com
fullname=Example
dob=2000-00-00
gender=M
postcode=1234
country=en
language=au
timezone=Australia/Sydney
</blockcode>

### Sending registration information to an OpenID site

When you log into an OpenID site, and the site asks for your registration information using this extension, you will see extra information in the [log in page](/docs/1/openid).


## User Interface Extension   {#ui}

This extension, <code>ui.extension.php</code>, implements the draft [OpenID User Interface Extension](http://svn.openid.net/repos/specifications/user_interface/1.0/trunk/openid-user-interface-extension-1_0.html).  It allows relying parties to alter SimpleID's user interface presented to users when they log into the relying party.
