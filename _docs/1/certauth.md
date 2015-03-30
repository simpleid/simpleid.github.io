---
layout: docs
doctree: doctree1
title: Logging in using client SSL certificates (version 0.9 and later)
date: 2011-09-01 22:10:18
permalink: /docs/1/certauth
---

## Introduction

SimpleID version 0.9 supports logging in using client SSL certificates instead of using a user name and password.

Instead of being prompted to enter a user name and password, your browser will ask you to select a certificate stored on your computer.  SimpleID will then match the certificate against information stored in your identity file and log you in.

**Note that this is for advanced users only.  It requires a large number of highly technical steps to set up.**

Much of this information is taken from [Using SSL Client Certificates with PHP](http://cweiske.de/tagebuch/ssl-client-certificates.htm).

## What you need

You will need the following:

- SimpleID 0.9 or later
- Apache version 2.3 or later, with `mod_ssl` installed, and access to the server's Apache configuration file `httpd.conf` (not merely `.htaccess`)
- Your personal certificate issued by a certificate authority recognised by the web server

## Setting up

### Configure your web server

You will need to configure your web server to request a certificate from your browser and verify it when you go to your SimpleID installation.

Add the following directives to the virtual host within the server configuration:

{% highlight apache %}
SSLVerifyClient optional
SSLVerifyDepth 1
SSLOptions +StdEnvVars
SSLCACertificateFile /path/to/your/trusted/ca/certificates
SSLOCSPEnable on
{% endhighlight %}

### Enable the `certauth` extension

Edit the `SIMPLEID_EXTENSIONS` configuration option in the `config.php` file and add the `certauth` extension. See [installing and uninstalling extensions](/docs/1/extensions/#installing) for further details.

### Add certificate details to your identity file

Your certificate is identified using two parameters:

- the certificate's serial number
- the distinguished name of the certificate's issuer

You can find out these two values using OpenSSL by running the following commands (replacing the file name of the certificate as required):

{% highlight bash %}
openssl x509 -noout -serial -in certificate.crt
openssl x509 -noout -issuer -in certificate.crt
{% endhighlight %}

These two values are then combined and placed in the `certauth` section of your [identity file](/docs/1/identity-files) as follows:

{% highlight ini %}
[certauth]
cert[]="02A97C;/C=Example/O=Example CA/OU=Example CA Certificate Signing/CN=Example Client CA"
{% endhighlight %}

Note the brackets in the `cert[]` name.  This allows you to associate your identity with more than one certificate.